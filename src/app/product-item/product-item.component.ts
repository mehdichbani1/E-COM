import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../model/Product";
import {DetailsPanier} from "../model/DetailsPanier";
import {SharedvariableService} from "../sharedvariable.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
   @Input() p!:Product;
   @Output() productSelected = new EventEmitter<Product>();
  clickedProduct(p:Product){
    this.productSelected.emit(p);
  }
  constructor(private sharedvariableservice : SharedvariableService) {
  }
  getColor(p:Product){
    if (this.p.isDisponible) {
      return 'green';
    }
    else {
      return 'red';
    }
  }
  isEnStock(p:Product) {
    if (p.isDisponible) {
      return "produit en stock";
    }
    else {
      return "produit en rupture de stock";
    }
  }

  cat(p:Product){
    if (p.category == this.sharedvariableservice.category || this.sharedvariableservice.category == 'All') {
      //console.log(p.category);
      return true;
    }
    else {
      return false;
    }
  }
  catSm(p:Product){
    if (p.category == 'smartphones') {
      //console.log(p.category);
      return true;
    }
    else {
      return false;
    }
  }
}
