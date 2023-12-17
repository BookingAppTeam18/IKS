import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../model/profile.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  profile: Profile;
    changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    });
    constructor(private route: ActivatedRoute, private router: Router, private service: ProfileService) {}
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const profile = history.state.profile;
        console.log('Profile in ChangePasswordComponent:', profile);
        if (profile) {
          this.profile = profile;
        }
      });  }

    saveChanges(): void {
      if (this.changePasswordForm.valid) {
        console.log('Form is valid');
        this.updateUserInfo();
      }
    }

    updateUserInfo(): void {
      const oldPassword = this.changePasswordForm.value.oldPassword;
      const newPassword = this.changePasswordForm.value.newPassword;
      const confirmPassword = this.changePasswordForm.value.confirmPassword;
      if (newPassword === confirmPassword && oldPassword === this.profile.password) {
        const updatedProfile: Profile = {
          firstName: this.profile.firstName,
          lastName: this.profile.lastName,
          email: this.profile.email,
          phone: this.profile.phone,
          address: this.profile.address,
          userType: this.profile.userType,
          password: newPassword || '',
          id: this.profile.id
        };
        console.log(updatedProfile.id);
        this.service.updateUserInfo(updatedProfile).subscribe({
          next: (_) => {
            console.log('Update successful');
            // Navigiraj nazad na user-info sa ažuriranim podacima
            this.router.navigate(['/user-info'], { state: { profile: updatedProfile } });
          },
          error: (err) => {
            console.error('Update failed', err);
          }
        });
      } else {
        console.log("Passwords do not match or old password is incorrect");
      }
    }
    
}
