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
  selectedValue !: string;
  options = [
    { label: 'All', value: 'All' },
    { label: 'Vehicule', value: 'Vehicule' },
    { label: 'Option 3', value: 'option3' }
  ];

  products!:Product[];
  products2!: Product[];
  panier !: Product[];
  products3 !: Observable<Product[]>;
  filteredProducts !: Product[];

  constructor (private productservice : ProductserviceService,
               private panierservice : PanierserviceService,
               private router : Router,
               private compteservice : CompteserviceService,
               private sharedvariableservice: SharedvariableService){

  }

  ngOnInit():void {
    this.products = this.productservice.getAll();
    this.panier = new Array<Product>;
    /*this.productservice.getProducts.subscribe((response:DetailsPanier[]) => {
      this.products2 = response;
    });*/
    /*this.products3 = this.productservice.getAllProducts2();
    this.products2 = this.productservice.getData();*/
    this.filteredProducts = this.products;

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
  filterByValue(list: Product[], value: string) {
    return list.filter(item => item.category === value);
  }
  //products1 = this.filterByValue(this.products,this.selectedValue);
  filterProducts(event: any) {
    //const category = event.target.value;
    //console.log(this.selectedValue);
    if (this.selectedValue == 'All') {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.filterByValue(this.products,this.selectedValue);
    }
  }
}
