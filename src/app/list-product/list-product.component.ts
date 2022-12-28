import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/Product";
import {ProductserviceService} from "../productservice.service";
import {PanierserviceService} from "../panierservice.service";
import {PanierComponent} from "../panier/panier.component";
import {Panier} from "../model/Panier";
import {DetailProduitComponent} from "../detail-produit/detail-produit.component";
import {DetailsPanier} from "../model/DetailsPanier";
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import {RESOURCE_CACHE_PROVIDER} from "@angular/platform-browser-dynamic";
import {Compte} from "../model/Compte";
import {CompteserviceService} from "../compteservice.service";
import {SharedvariableService} from "../sharedvariable.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{

  products!:Product[];
  products2!: Observable<Product[]>;
  panier !: Product[];

  products3!: Observable<DetailsPanier[]>;

  constructor (private productservice : ProductserviceService,
               private panierservice : PanierserviceService,
               private router : Router,
               private compteservice : CompteserviceService,
               private sharedvariableservice: SharedvariableService){

  }

  ngOnInit():void {
    this.products = this.productservice.getAll();
    this.panier = new Array<Product>;
    this.products3 = this.productservice.getProducts();
    this.products2 = this.productservice.getProducts2();
    /*this.productservice.getProducts.subscribe((response:DetailsPanier[]) => {
      this.products2 = response;
    });*/
  }

  addToPanier($event:Product){
    if (this.sharedvariableservice.isConnected == 0) {
      this.navigateToCompte();

    }
    else if (this.sharedvariableservice.isConnected = 1) {
      this.panier.push($event);
      alert("le produit "+$event.libele+" a été ajouté");
      this.panierservice.panierItem.push(new Panier(1,$event));
    }
  }
  navigateToCompte() {
    this.router.navigate(['/compte']);
  }

}
