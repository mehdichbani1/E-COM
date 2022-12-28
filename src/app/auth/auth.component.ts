import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CompteserviceService} from "../compteservice.service";
import {Compte} from "../model/Compte";
import {Router} from "@angular/router";
import {ListProductComponent} from "../list-product/list-product.component";
import {SharedvariableService} from "../sharedvariable.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  comptes !: Compte[];
  email !: string;
  password !: string;

  constructor(private authservice : CompteserviceService,
              private router : Router,
              private sharedvariableservice : SharedvariableService) {
  }
  ngOnInit(): void {
    this.comptes = this.authservice.getAll();

  }
  isValid() {
    // retrieve email and password from form fields
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.password = (document.getElementById('password') as HTMLInputElement).value;
    if (this.validateLogin(this.email,this.password)) {
      this.sharedvariableservice.isConnected = 1;
      this.navigateToProduits();
    }
    else {
      alert("retry");
    }

    // do something with the email and password (e.g. send them to a server)
  }
  validateLogin(email: string, password: string): boolean {
    if (!email || !password) {
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
