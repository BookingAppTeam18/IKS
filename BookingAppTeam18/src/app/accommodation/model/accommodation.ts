export interface Accommodation {
  _id?:number;
  name:string;
  benefits:any[];//list enums
  ownerId:number;
  longitude:number;
  latitude:number;
  location:string;
  minNumOfGuests:number;
  maxNumOfGuests:number;
  gallery:string[];
  accommodationType:any;//enum
  description:string;
}
