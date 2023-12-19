import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { Profile } from 'src/app/profile/model/profile.module';
import { UserType } from 'src/app/profile/model/userType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private accountService: AccountService) { }
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required)
  });

  signUp(): void {
    console.log(this.registerForm.value);
    const profile: Profile = {
      firstName: this.registerForm.value.firstName || '',
      lastName: this.registerForm.value.lastName || '',
      email: this.registerForm.value.email || '',
      phone: this.registerForm.value.phone || '',
      address: this.registerForm.value.address || '',
      userType: this.convertToUserType(this.registerForm.value.userType || ''),
      password: ''
    };
    if (this.registerForm.value.password !== this.registerForm.value.password2) {
      console.log('Passwords do not match');
      return;
    }
    profile.password = this.registerForm.value.password || '';
    // this.accountService.createAccount(profile).subscribe(
    //   (response: any) => {
        
       
    //     console.log('Registracija uspješna:', response);
    //   },
    //   (error: any) => {
    //     console.error('Greška:', error);
    //   }
    // );
  }
  convertToUserType(value: string): UserType {
    switch (value) {
      case 'OWNER':
        return UserType.OWNER;
      case 'GUEST':
        return UserType.GUEST;
      default:
        return UserType.ANONYMUS;
    }
}
}
