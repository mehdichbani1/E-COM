import { Injectable } from '@angular/core';
import {Product} from "./model/Product";
import * as https from "https";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

    products1:Product[] = [new Product(1,"skateboard",70000,"https://cutt.ly/32epXZw",true,"Vehicule"),
      new Product(2,"scooter",200,"https://cutt.ly/s2ep58Y",true,"Vehicule"),
      new Product(3,"moto",1000,"https://cutt.ly/O0njFfH",true,"Vehicule"),
      new Product(4,"helicopter",500000,"https://cutt.ly/02egwqO",false,"Vehicule"),
      new Product(5,"range rover",300000,"https://cutt.ly/32epIZa",false,"Autre")];


  getAll(){
  return this.products1;
  }
  jsonData!: any;


  data !: Product[];

    test(){
      console.log("test function")
      fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(json=>console.log(json))
    }

  produits !: Product[];

  constructor(private http: HttpClient) {

  }
  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProd(){
    return this.http.get<any>("https://products-733e2-default-rtdb.firebaseio.com/.json");
  }


}
