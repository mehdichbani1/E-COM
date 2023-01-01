import { Component } from '@angular/core';
import {SharedvariableService} from "../sharedvariable.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  email !:string;
  password !: string;
  name !: string;
  constructor(private sharedvariableservice : SharedvariableService,
              private router : Router) {
  }
  isValid() {
    // retrieve email and password from form fields
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.password = (document.getElementById('password') as HTMLInputElement).value;
    this.name = (document.getElementById('name') as HTMLInputElement).value;
    if (this.validateLogin(this.email,this.password,this.name)) {
      this.sharedvariableservice.isConnected = 1;
      this.navigateToProduits();
    }
    else {
      alert("retry");
    }

    // do something with the email and password (e.g. send them to a server)
  }
  validateLogin(email: string, password: string, name: string): boolean {
    if (!email || !password || !name) {
      return false;
    }

    if (!this.isValidEmail(email)) {
      return false;
    }

    if (password.length < 8) {
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    // Regex to check if email is in proper format
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
  navigateToProduits() {
    this.router.navigate(['/produits']);
  }
}
