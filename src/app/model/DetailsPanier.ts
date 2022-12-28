import {Product} from "./Product";

/*export class DetailsPanier{
  qte: number;
  produit: Product;

  constructor(qte: number, produit: Product) {
    this.qte = qte;
    this.produit = produit;
  }
}*/
export class DetailsPanier{
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;

  constructor(id: number, title: string, description: string, price: number, discountPercentage: number, rating: number, stock: number, brand: string, category: string, thumbnail: string, images: Array<string>) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
    this.images = images;
  }
  isEnStock() {
    if (this.id > 10) {
      return "produit en stock";
    }
    else {
      return "produit en rupture de stock";
    }
  }
  getColor(){
    if (this.id > 10) {
      return 'green';
    }
    else {
      return 'red';
    }
  }
}
