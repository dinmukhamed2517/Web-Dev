import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../../../modules/albums";
import {Observable} from "rxjs";
import {Photo} from "../../../modules/photos";
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private httpClient:HttpClient) { }
  getAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }
  getAlbum(id:number):Observable<Album> {
    return this.httpClient.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getAlbumPhotos(id:number):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
  updateAlbum(id:number,newTitle:string):Observable<Album> {
    return this.httpClient.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`,{title: newTitle})
  }
  deleteAlbum(id:number):Observable<Album>{
    return this.httpClient.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  createAlbum(album:Album):Observable<Album>{
    return this.httpClient.post<Album>(`https://jsonplaceholder.typicode.com/albums`, album);
  }
}
