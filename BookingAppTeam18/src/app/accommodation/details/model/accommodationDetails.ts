import {AccommodationDTO} from "../../accommodations/model/accommodation";
import{CommentDTO} from"../../../profile/comments/model/comment";
export interface AccommodationDetailsDTO {
  accommodationDTO:AccommodationDTO;
  commentsDTO:CommentDTO[];
}
