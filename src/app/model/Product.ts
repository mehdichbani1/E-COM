export class Product{
  id:number;
  libele:string;
  prix:number;
  imageUrl:string;
  isDisponible:boolean;
  constructor(id:number,libele:string,prix:number,imageUrl:string,isDisponible:boolean){
    this.id=id;
    this.libele=libele;
    this.prix=prix;
    this.imageUrl=imageUrl;
    this.isDisponible=isDisponible;
  }
  isEnStock() {
    if (this.isDisponible) {
      return "produit en stock";
    }
    else {
      return "produit en rupture de stock";
    }
  }
  getColor(){
    if (this.isDisponible) {
      return 'green';
    }
    else {
      return 'red';
    }
  }

}
