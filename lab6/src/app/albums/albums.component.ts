import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AlbumsService} from "../services/albums/albums.service";
import {BehaviorSubject} from "rxjs";
import {Album} from "../../modules/albums";
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  newAlbum:Album;
  loaded!: boolean;
  constructor(private httpClient:HttpClient,private albumsService:AlbumsService) {
    this.newAlbum = {} as Album;
    this.loaded = true;
  }
  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
  create(){
    console.log("works");
    this.loaded = false;
    this.albumsService.createAlbum(this.newAlbum).subscribe(album =>{
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }
  delete(id :number):void{
    this.loaded = false;
    this.albumsService.deleteAlbum(id).subscribe((album) =>{
      this.loaded =true;
      this.albums = this.albums.filter(item => item.id != id);
    });
  }
}
