export class Product{
  id:number;
  libele:string;
  prix:number;
  imageUrl:string;
  isDisponible:boolean;
  category : string;
  constructor(id:number,libele:string,prix:number,imageUrl:string,isDisponible:boolean,category : string){
    this.id=id;
    this.libele=libele;
    this.prix=prix;
    this.imageUrl=imageUrl;
    this.isDisponible=isDisponible;
    this.category = category;
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
