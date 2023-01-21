import {Component, EventEmitter, Output} from '@angular/core';
import {ProductserviceService} from "../productservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PanierserviceService} from "../panierservice.service";
import {Product} from "../model/Product";
import {Panier} from "../model/Panier";
import {HttpClient} from "@angular/common/http";
import {SharedvariableService} from "../sharedvariable.service";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  p!: Product;
  products!: Product[];

  constructor(private productservice: ProductserviceService,
              private route: ActivatedRoute,
              private panierservice: PanierserviceService,
              private http: HttpClient,
              private sharedvariableservice: SharedvariableService,
              private router: Router) {
  }

  allprod !: Product[];
  id !: number;
  ngOnInit(): void {
    console.log("something");
    this.panier = new Array<Product>;
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getAllMovies();
  }
  getProductById() {
    return this.allMovies.filter(x => x.id == this.id)[0];
  }

  allMovies !: Product[];
  moviesJson = new ProductserviceService(this.http);
  getAllMovies=()=>{
    this.moviesJson.getProd().subscribe(data => {
      this.allMovies=data.products;
    });
  }
  /*clicked(p: Product) {
    if (this.product.isDisponible == true) {
      this.clickedProduct.emit(p);
    } else {
      this.product.isDisponible = false;
    }
  }*/
  @Output() productSelected = new EventEmitter<Product>();
  clickedProduct(p:Product){
    this.productSelected.emit(p);
    this.addToPanier(p);
  }
  panier !: Product[];
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
