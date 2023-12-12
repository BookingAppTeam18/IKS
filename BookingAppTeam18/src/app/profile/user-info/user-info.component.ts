import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  constructor(private router: Router) {}

  navigateToEditUser(): void {
    this.router.navigate(['/user-info/edit-user']);
  }
}
