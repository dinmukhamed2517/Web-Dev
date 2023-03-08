import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../services/albums/albums.service";
import {Photo} from "../../modules/photos";
import {ActivatedRoute} from "@angular/router";
import {Album} from "../../modules/albums";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos!: Photo[];
  album!: Album;
  loaded!: boolean
  constructor(private albumService : AlbumsService,private route: ActivatedRoute,) {
    this.loaded =true;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get("id")){
        let id = Number(params.get("id"));
        this.albumService.getAlbumPhotos(id).subscribe((photos) =>{
          this.photos = photos;
        })
      }
    })
    this.route.paramMap.subscribe((params) =>{
      if(params.get("id")){
        let id = Number(params.get("id"));
        this.loaded = false;
        this.albumService.getAlbum(id).subscribe(album =>{
          this.album = album;
          this.loaded = true;
        })
      }
    })
  }
}
