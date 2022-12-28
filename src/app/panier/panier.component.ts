import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Product} from "../model/Product";
import {PanierserviceService} from "../panierservice.service";
import {Panier} from "../model/Panier";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  @ViewChild('valeur') valeur !:ElementRef;
  panier !: Panier[];

  constructor(private panierservice : PanierserviceService) {
  }
  ngOnInit():void {
    this.panier = this.panierservice.getAll();
  }
  clickedProduct(p:Panier){
    const index = this.panier.indexOf(p);
    const x = this.panier.splice(index, 1);
    alert("le produit "+p.produit.libele+" a été retiré du panier");
  }
  getQte(p:Panier){
    p.qte = this.valeur.nativeElement.value;
    alert("qte: "+p.qte);
  }

}
