import {Product} from "./Product";
import {DetailsPanier} from "./DetailsPanier";

export class Panier{
  qte !: number;
  produit !: Product;


  constructor(qte: number, produit: Product) {
    this.qte = qte;
    this.produit = produit;
  }
}
