import { productObject } from './../productObject';
import { CartService } from './../cart.service';
import { ProductService } from '../product.service';
import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // product$ !: Observable<productObject>;
  product: productObject | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private cart: CartService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    // this.product$ = this.route.paramMap.pipe(
    //  switchMap((params: ParamMap) =>
    //    this.service.getProductDetail(params.get('id')!))
    // );
    this.getProductDetail();
  }

  getProductDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProductDetail(id)
      .subscribe((product: productObject | undefined) => this.product = product);
  }
  addToCart(product: productObject): void{
    this.cart.addToCart(product);
    console.log(product);
  }
}
