import {Page} from "./page"
export interface Comment{
   id:number;
   message:string;
   rate:number;
   writtenById:number;
   writtenToId:number;
   page:Page;

}
