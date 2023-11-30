export interface Accommodation {
  _id?:number;
  name:string;
  benefits:any[];//list enums
  owner:number;
  location:string;
  long:number;
  lat:number;
  activePrice:number;
  minNumGuest:number;
  maxNumGuest:number;
  gallery:string[];
  accommodationType:any;//enum
  prices:Map<number,Date>;

}
