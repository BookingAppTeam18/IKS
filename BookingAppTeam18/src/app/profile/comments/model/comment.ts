import {Page} from "./page"
export interface Comment{
   id:number;
   message:string;
   rate:number;
   writtenById:number;
   writtenByName:string;
   writtenToId:number;
   page:Page;

}
