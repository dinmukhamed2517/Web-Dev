import {Component, OnInit} from '@angular/core';
import { CategoryService} from "../services/category/category.service";
import {Category} from "../models/category";
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categories: Category[] = [];

  ngOnInit(): void {
    this.categories = this.categoryService.getAll();
  }
  constructor(private categoryService : CategoryService) {
  }

}
