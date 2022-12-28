import {Component, EventEmitter, Output} from '@angular/core';
import {ProductserviceService} from "../productservice.service";
import {ActivatedRoute} from "@angular/router";
import {PanierserviceService} from "../panierservice.service";
import {Product} from "../model/Product";
import {Panier} from "../model/Panier";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  product!: Product;
  products!: Product[];


  constructor(private productservice: ProductserviceService,
              private route: ActivatedRoute,
              private panierservice: PanierserviceService) {
  }


  ngOnInit(): void {
    this.products = this.productservice.getAll();
    const id: number = this.route.snapshot.params['id'];
    this.product = this.getProductById(id);

  }

  getProductById(id: number) {
    return this.products.filter(x => x.id == id)[0];
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
  addToPanier($event:Product){
    alert("le produit "+$event.prix+" a été ajouté");
    this.panierservice.panierItem.push(new Panier(1,$event));
  }
}
