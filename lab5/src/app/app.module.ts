import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { TopBarComponent } from './top-bar/top-bar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { LikeButtonComponent } from './like-button/like-button.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CategoryListComponent,
    ProductListComponent,
    HomePageComponent,
    ProductDescriptionComponent,
    LikeButtonComponent,
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterModule.forRoot([
          {
            path:'',
            component:HomePageComponent
          },
          {
            path:'categories/:name/product/:id',
            component:ProductDescriptionComponent
          },
          {
            path:'categories/:name',
            component: ProductListComponent
          },
          {
            path:'categories',
            component : CategoryListComponent
          },
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
