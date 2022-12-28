import { Injectable } from '@angular/core';
import {Product} from "./model/Product";
import {ListProductComponent} from "./list-product/list-product.component";
import {PanierComponent} from "./panier/panier.component";
import {Panier} from "./model/Panier";

@Injectable({
  providedIn: 'root'
})
export class PanierserviceService {

  panierItem : Panier[] = new Array<Panier>;

  getAll(){
    return this.panierItem;
  }
}
