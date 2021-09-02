import { Component, OnDestroy, OnInit } from '@angular/core';
import { TileStyler } from '@angular/material/grid-list/tile-styler';
import { product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { productObject } from '../productObject';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  slides = [
    {'image': 'https://images.unsplash.com/photo-1586155638764-bf045442f5f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1470081989310-425cc509b8f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1470955233021-2c79a52e5034?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1619500535492-3e314c85f720?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1619029903335-d95dc6acab2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3067&q=80'}
  ];

  // product$!: Observable<productObject[]>;
  // selectedId = 0;
  product = product;
  products: productObject[] = [];

  constructor( private route: ActivatedRoute, private service: ProductService ) { }

  ngOnInit(): void {
    // this.product$ = this.route.paramMap.pipe(
    //  switchMap((params => {
    //    this.selectedId = parseInt(params.get('id')!, 10);
    //    return this.service.getProduct;
    //  })
    // ));
    this.getProduct();
  }

  getProduct(): void {
    this.service.getProduct()
    .subscribe(products => this.products = products);
  }
}
