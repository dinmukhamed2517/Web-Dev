import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product/product.service";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit{
  product!:Product;
  constructor(private route:ActivatedRoute,private productService:ProductService) {
  }
  ngOnInit():void{
    this.route.params.subscribe((params)=>{
      if(params['id']) {
        this.product = this.productService.getProductById(params['id']);
      }
      })
  }
}
