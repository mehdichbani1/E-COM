import { Component } from '@angular/core';
import {SharedvariableService} from "./sharedvariable.service";

import {Product} from "./model/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECommerce';
  constructor(private sharedvariableservice : SharedvariableService, private router: Router) {
    this.router.navigate(['/produits']);
  }
  isConnected(){
    if (this.sharedvariableservice.isConnected == 1) {
      return true;
    }
    else {
      return false;
    }
  }
}
