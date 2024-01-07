import {Component, Input} from '@angular/core';
import {Comment} from "./model/comment"
import {Profile} from "../model/profile.module";
import {UserType, UserTypeHelper} from "../model/userType";
import {Page} from "./model/page";
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input() comments:Comment[] = [];

  @Input() currentProfile:Profile;
  @Input() pageId:number;

  newComment: string = '';
  stars: boolean[] = Array(5).fill(false); // Inicijalno, sve zvezde su prazne
  rating: number = 0;
  constructor(private commentService: CommentService) {} // Injektuj CommentService u konstruktor

  ngOnInit() {
    // Ovde možete izvršiti dodatne akcije nakon što se komponenta inicijalizuje
  }
  postComment() {
    // Provera da li je postavljen rating i unet komentar
    if (this.rating >= 1 && this.rating <= 5 && this.newComment.trim() !== '' ) {
      // Kreiranje objekta tipa Comment
      const newComment: Comment = {
        id:0,
        message: this.newComment,
        rate: this.rating,
        writtenById: this.currentProfile!.id!,
        writtenByName: this.currentProfile!.email,
        writtenToId: this.pageId,
        page:Page.ACCOMMODATION
      };

      this.commentService.save(newComment).subscribe(savedComment => {
        // Dodavanje novog komentara u listu komentara
        this.comments.unshift(newComment);

        // Resetovanje forme nakon submita
        this.resetForm();
      });

      // Resetovanje forme nakon submita
      this.resetForm();
    } else {
      // Ako nisu ispunjeni uslovi, prikažite odgovarajuće poruke ili preduzmite druge akcije
    }
  }
  resetForm() {
    // Resetovanje vrednosti nakon uspešnog submita
    this.newComment = '';
    this.rating = 0;
    this.stars = Array(5).fill(false);
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

  protected readonly UserType = UserType;

  isAdmin(userType: string | number): boolean {
    const userTypeEnum = UserTypeHelper.stringToEnumValue(userType);
    return userTypeEnum === UserType.ADMIN;
  }
}
