import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product/product.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];
  constructor(private productService:ProductService, private route : ActivatedRoute) {
  }
  ngOnInit():void {
    this.route.params.subscribe(params => {
      if(params['name']) {
        this.products = this.productService.getProductsByCategory(params['name']);
      }
    })
  }
}
