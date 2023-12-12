import {Accommodation} from "../../accommodations/model/accommodation";
import{Comment} from"../../../profile/comments/model/comment";
export interface AccommodationDetails{
  accommodationDTO:Accommodation;
  commentsDTO:Comment[];
}
