import { ProductService } from '../product.service';
import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { productObject } from '../productObject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // product$ !: Observable<productObject>;
  product: productObject| undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) { }

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
      .subscribe(product => this.product = product);
  }
}
