import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../model/profile.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {



  profile: Profile;
  editUserForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router, private service: ProfileService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const profile = history.state.profile;
      console.log('Profile in EditUserComponent:', profile);
      if (profile) {
        this.profile = profile;
        this.editUserForm.patchValue(this.profile);
      }
    });   
}

onSave(): void {
  if (this.editUserForm.valid) {
    this.updateUserInfo();
  }
}

updateUserInfo(): void {
  const updatedProfile: Profile = {
    firstName: this.editUserForm.value.firstName || '',
    lastName: this.editUserForm.value.lastName || '',
    email: this.editUserForm.value.email || '',
    phone: this.editUserForm.value.phone || '',
    address: this.editUserForm.value.address || '',
    password: this.profile.password,
    userType: this.profile.userType,
    id: this.profile.id
  };
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
}
}
