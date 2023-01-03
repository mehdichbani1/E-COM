import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../model/Product";
import {DetailsPanier} from "../model/DetailsPanier";

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
}
