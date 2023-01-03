import { Injectable } from '@angular/core';
import {Product} from "./model/Product";
import * as https from "https";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

    products:Product[] = [new Product(1,"skateboard",70000,"https://cutt.ly/32epXZw",true,"Vehicule"),
      new Product(2,"scooter",200,"https://cutt.ly/s2ep58Y",true,"Vehicule"),
      new Product(3,"moto",1000,"https://cutt.ly/O0njFfH",true,"Vehicule"),
      new Product(4,"helicopter",500000,"https://cutt.ly/02egwqO",false,"Vehicule"),
      new Product(5,"range rover",300000,"https://cutt.ly/32epIZa",false,"Autre")];


  getAll(){
  return this.products;
  }
  jsonData!: any;

  constructor(private http: HttpClient) { }
  data !: Product[];
  getData() {
    this.http.get<Product[]>('http://localhost:3000/products')
      .pipe(map(data => data.map(item => new Product(item.id,item.libele,item.prix,item.imageUrl,item.isDisponible,item.category))))
      .subscribe(data => {
        // data is an array of MyData objects
        this.data = data;
      });
    return this.data;
  }
  getAllProducts2():Observable<Product[]>{
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(x=>this.products=x);
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

}
