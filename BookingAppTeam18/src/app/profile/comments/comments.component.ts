import { Component, Input   } from '@angular/core';
import {Comment} from "./model/comment"
import {Profile} from "../model/profile.module";
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input() comments:Comment[] = [];

  @Input() currentProfile:Profile;

  newComment: string = '';
  stars: boolean[] = Array(5).fill(false); // Inicijalno, sve zvezde su prazne
  rating: number = 0;

  postComment() {
    if (this.newComment.trim() !== '') {

    }
  }

  getStars(rate: number): number[] {
      return Array.from({ length: rate }, (_, index) => index + 1);
  }

  highlightStars(index: number) {
    // Prikazi zvezde do trenutnog indeksa tokom hoverovanja
    this.stars = this.stars.map((_, i) => i <= index);
  }

  resetStars() {
    // Resetuj prikaz zvezda na osnovu trenutne ocene
    this.stars = Array(5).fill(false).map((_, i) => i < this.rating);
  }

  setRating(rating: number) {
    // Postavi ocenu i prikaži zvezde do tog trenutnog broja
    this.rating = rating;
    this.stars = Array(5).fill(false).map((_, i) => i < rating);
  }
}
