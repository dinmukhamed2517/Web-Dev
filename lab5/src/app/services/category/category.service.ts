import { Injectable } from '@angular/core';
import {Category} from "../../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getAll():Category[]{
    return [
      {
        id : 1,
        name : "Computers",
        imageUrl : "https://kaspi.kz/img/Computer.png"
      },
      {
        id : 2,
        name : "Phones and gadgets",
        imageUrl : "https://kaspi.kz/img/Phone.png"
      },
      {
        id : 3,
        name : "Clothes",
        imageUrl :"https://kaspi.kz/img/Clothes1.png"
      },
      {
        id : 4,
        name : "Sport",
        imageUrl : "https://kaspi.kz/img/Sport1.png"
      }
    ]
  }
}
