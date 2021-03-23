import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products = JSON.parse(localStorage.getItem('products') || '[]');
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(i){
    this.products.splice(i, 1);
    localStorage.setItem('products', JSON.stringify(this.products))
  }

}
