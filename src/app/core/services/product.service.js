import {
    map,
    tap,
    mergeMap,
    BehaviorSubject,
  } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

import { kanaService } from './kana.service';

class ProductService{

  constructor() {
    this.kanaSrv = kanaService
    this.listProduct = [];

    this.productFiltered = new BehaviorSubject([]);
   
    const result$ =this.kanaSrv.getListProduct$()
    .pipe(
        tap( resp => this.listProduct = resp ),
        tap( console.log("PRODUCTOS AGREGADOS CON EXITO"))
    )
    result$.subscribe();
   }

   getProductList(){
    return  this.listProduct;
}

   filterForName(productName) {
    const products = this.listProduct.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()));
       this.productFiltered.next( products )
      console.log(products);
  }

}
export const productService = new ProductService();