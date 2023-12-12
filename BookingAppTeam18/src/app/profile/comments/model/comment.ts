import {Accommodation} from "../../../accommodation/accommodations/model/accommodation";

export interface Comment {
   id:number;
   message:string;
   rate:number;
   writtenById:number;
   writtenToId:number;
   page:Page;

}
