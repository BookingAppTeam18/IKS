import {AccommodationInfo} from "../../accommodations/model/accommodationInfo";
import{Comment} from"../../../profile/comments/model/comment";
export interface AccommodationDetails{
  accommodationDTO:AccommodationInfo;
  commentsDTO:Comment[];
}
