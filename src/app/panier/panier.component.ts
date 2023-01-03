import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Product} from "../model/Product";
import {PanierserviceService} from "../panierservice.service";
import {Panier} from "../model/Panier";
import {SharedvariableService} from "../sharedvariable.service";
import {Compte} from "../model/Compte";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  @ViewChild('valeur') valeur !:ElementRef;
  panier !: Panier[];
  quantite !:number;
  compte !:Compte;

  constructor(private panierservice : PanierserviceService,
              private sharedvaribleservice: SharedvariableService) {
  }
  ngOnInit():void {
    this.panier = this.panierservice.getAll();
    this.compte = this.sharedvaribleservice.compte;
  }
  clickedProduct(p:Panier){
    const index = this.panier.indexOf(p);
    const x = this.panier.splice(index, 1);
    alert("le produit "+p.produit.libele+" a été retiré du panier");
  }
  /*getQte(p:Panier){
    p.qte = this.valeur.nativeElement.value;
    alert("qte: "+p.qte);
  }*/
  getQte(p:Panier){
    p.qte = +(document.getElementById(p.produit.id.toString()) as HTMLInputElement).value;
    alert("qte: "+p.produit.libele+p.qte);
  }



}
