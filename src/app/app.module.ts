import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PanierComponent } from './panier/panier.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InscriptionComponent } from './inscription/inscription.component';

const appRoutes : Routes = [
  { path: 'produits', component : ListProductComponent },
  { path : 'produits/details/:id', component : DetailProduitComponent },
  { path : 'compte', component : AuthComponent },
  { path : 'panier', component : PanierComponent },
  { path : 'insc', component : InscriptionComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductItemComponent,
    PanierComponent,
    DetailProduitComponent,
    AuthComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
