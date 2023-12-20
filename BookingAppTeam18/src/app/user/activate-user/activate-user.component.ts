import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent {
  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const email = params['email'];
      if (email) {
        this.activateUser(email);
        
      } else {
        console.error('Email parameter is missing.');
      }
    });
  }

  private activateUser(email: string): void {
    // Pozovite servis za aktivaciju korisnika
    this.accountService.activateUser(email).subscribe(
      (response: any) => {
        console.log('Korisnik uspješno aktiviran:', response);
        // Dodajte logiku ili preusmeravanje nakon aktivacije
      },
      (error: any) => {
        console.error('Greška pri aktivaciji korisnika:', error);
        // Dodajte logiku u slučaju neuspješne aktivacije
      }
    );
  }
}
