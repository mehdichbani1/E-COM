import { Injectable } from '@angular/core';
import {Compte} from "./model/Compte";
import {Product} from "./model/Product";

@Injectable({
  providedIn: 'root'
})
export class SharedvariableService {
  isConnected : number = 0;
  compte !: Compte;

  category !: string;

  prodi !: Product[];
  constructor() {
  }
}
