import {Page} from "./page"
export interface CommentDTO {
   id:number;
   message:string;
   rate:number;
   writtenById:number;
   writtenToId:number;
   page:Page;

}
