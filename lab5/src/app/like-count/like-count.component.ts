import { Component } from '@angular/core';
import {LikeButtonComponent} from "../like-button/like-button.component";

@Component({
  selector: 'app-like-count',
  templateUrl: './like-count.component.html',
  styleUrls: ['./like-count.component.css']
})
export class LikeCountComponent {
  count = 0;

  constructor(private likeButton: LikeButtonComponent) {
    this.likeButton.isLiked$.subscribe(isLiked => {
      if (isLiked) {
        this.count++;
      } else {
        this.count--;
      }
    });
  }
}
