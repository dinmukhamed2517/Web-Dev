import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import {RouterOutlet} from "@angular/router";
import {RouterModule} from "@angular/router";
import { AlbumsComponent } from './albums/albums.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TopBarComponent } from './top-bar/top-bar.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumDetailsComponent,
    AlbumPhotosComponent,
    AlbumsComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'albums/:id/photos',
        component: AlbumPhotosComponent
      },
      {
        path: 'albums/:id',
        component: AlbumDetailsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
