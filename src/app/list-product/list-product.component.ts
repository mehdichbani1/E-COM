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
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  selectedValue !: string;
  options = [
    { label: 'All', value: 'All' },
    { label: 'laptops', value: 'laptops' },
    { label: 'smartphones', value: 'smartphones'},
    { label: 'groceries', value: 'groceries' },
    { label: 'fragrances', value: 'fragrances' },
    { label: 'furniture', value: 'furniture' },
    { label: 'tops', value: 'tops' },
    { label: 'mens-watches', value: 'mens-watches' },
    { label: 'lighting', value: 'lighting' },
    { label: 'sunglasses', value: 'sunglasses' },

  ];

  products!:Product[];
  products2!: Product[];
  panier !: Product[];
  products3 !: Observable<Product[]>;
  filteredProducts !: Product[];

  allMovies : Product[] | undefined;
  moviesJson = new ProductserviceService(this.http);
  getAllMovies=()=>{
    this.moviesJson.getProd().subscribe(data => {
      this.allMovies=data.products;
      console.log(data);
      console.log(this.allMovies);
    });
  }

  constructor (private productservice : ProductserviceService,
               private panierservice : PanierserviceService,
               private router : Router,
               private compteservice : CompteserviceService,
               private sharedvariableservice: SharedvariableService,private http: HttpClient ){

  }
  produits !:Observable<Product[]>;
  prod !: Product[];
  ngOnInit():void {
    this.sharedvariableservice.category = 'All';
    this.products = this.productservice.getAll();
    this.panier = new Array<Product>;
    this.produits = this.productservice.getProducts();
    this.filteredProducts = this.products;
    this.getAllMovies();

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
    this.sharedvariableservice.category = this.selectedValue;
    //console.log(this.sharedvariableservice.category);
  }

  test(){
    this.productservice.test();
  }
  products4 : Product[]=[];
  getProducts(){

  }
}
