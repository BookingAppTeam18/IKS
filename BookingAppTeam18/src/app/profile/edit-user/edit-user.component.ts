import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../model/profile.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  // profile : Profile  = { firstName: 'sasas', lastName: '', email: '', phone: '', address: '' } ; // Prilagodite tip prema vašem objektu Profile
  profile: Profile;
  editUserForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute) {}
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
}
