import { Injectable } from '@angular/core';
import {Compte} from "./model/Compte";

@Injectable({
  providedIn: 'root'
})
export class CompteserviceService {
  comptes : Compte[]= [new Compte(1,"mehdi","mehdi@gmail.com","","07648","rabat",false)];
  getAll(){
    return this.comptes;
  }
  constructor() { }
}
