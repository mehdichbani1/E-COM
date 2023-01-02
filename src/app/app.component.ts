import { Component } from '@angular/core';
import {SharedvariableService} from "./sharedvariable.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECommerce';
  constructor(private sharedvariableservice : SharedvariableService) {
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
