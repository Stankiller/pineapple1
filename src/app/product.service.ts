import { Injectable } from '@angular/core';
import { productObject } from './productObject';
import { product } from './product';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(): Observable<productObject[]> {
    // tslint:disable-next-line: no-shadowed-variable
    const productObject = of(product);
    return productObject;
  }

  getProductDetail(id: number): any{
    // tslint:disable-next-line: no-non-null-assertion
    const productdetail = product.find(h => h.id === id)!;
    return of(productdetail);
    // return this.getProduct().pipe(
      // (+) before `id` turns the string into a number
      // map((products: productObject[]) => products.find(products => products.id === +id)!)
    // );
  }
}
