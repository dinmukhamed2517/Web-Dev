import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../services/albums/albums.service";
import {Album} from "../../modules/albums";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album: Album;
  newTitle:string;
  loaded : boolean;
  constructor(private route:ActivatedRoute,private albumsService : AlbumsService){
    this.album = {} as Album;
    this.loaded = true;
    this.newTitle="";
  }
  ngOnInit():void{
    this.route.paramMap.subscribe((params => {
      if(params.get('id')){
        let id = Number(params.get('id'))
        this.loaded = false;
        this.albumsService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    }))
  }
  alterTitle(){
    this.loaded =false;
    this.albumsService.updateAlbum(this.album.id,this.newTitle).subscribe((album) => {
      this.album.title = this.newTitle;
      this.loaded = true;
    })
  }
}
