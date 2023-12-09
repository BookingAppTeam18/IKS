export interface Accommodation {
  _id?:number;
  name:string;
  benefits:any[];//list enums
  owner:number;
  longitude:number;
  latitude:number;
  location:string;
  minNumGuest:number;
  maxNumGuest:number;
  gallery:string[];
  accommodationType:any;//enum
}
