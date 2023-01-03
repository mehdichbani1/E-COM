import {Panier} from "./Panier";

export class Compte {
  id : number;
  nom : string;
  email : string;
  mdp : string;
  tel : string
  adr : string;
  isConnected : boolean;
  panier !: Panier[];

  constructor(id: number, nom: string, email: string, mdp: string, tel: string, adr: string, isConnected: boolean) {
    this.id = id;
    this.nom = nom;
    this.email = email;
    this.mdp = mdp;
    this.tel = tel;
    this.adr = adr;
    this.isConnected = isConnected;
    // this.panier = panier;
  }
}
