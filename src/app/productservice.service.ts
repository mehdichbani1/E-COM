import { Injectable } from '@angular/core';
import {Product} from "./model/Product";
import * as https from "https";
import {HttpClient} from "@angular/common/http";
import {DetailsPanier} from "./model/DetailsPanier";


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

    products:Product[] = [new Product(1,"skateboard",70000,"https://cutt.ly/32epXZw",true),
      new Product(2,"scooter",200,"https://cutt.ly/s2ep58Y",true),
      new Product(3,"moto",1000,"https://cutt.ly/O0njFfH",true),
      new Product(4,"helicopter",500000,"https://cutt.ly/02egwqO",false),
      new Product(5,"range rover",300000,"https://cutt.ly/32epIZa",false)];


  getAll(){
  return this.products;
  }
  constructor(private http : HttpClient) { }
  getProducts(){
    return this.http.get<DetailsPanier[]>('https://dummyjson.com/products');
  }
  getProducts2(){
    return this.http.get<Product[]>('https://ecom-7eb03-default-rtdb.europe-west1.firebasedatabase.app/1/.json');
  }
}
