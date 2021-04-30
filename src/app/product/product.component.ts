import { Component, OnInit } from '@angular/core';

export interface Tile {
  photo: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  slides = [
    {'image': 'https://images.unsplash.com/photo-1586155638764-bf045442f5f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1470081989310-425cc509b8f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1470955233021-2c79a52e5034?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1619500535492-3e314c85f720?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'},
    {'image': 'https://images.unsplash.com/photo-1619029903335-d95dc6acab2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3067&q=80'}
  ];

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 2, photo: 'https://images.unsplash.com/photo-1619776391673-58f38f291197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
    {text: 'Two', cols: 4, rows: 2, photo: 'https://images.unsplash.com/photo-1619776391673-58f38f291197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
    {text: 'Three', cols: 4, rows: 2, photo: 'https://images.unsplash.com/photo-1619776391673-58f38f291197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
