export interface Accommodation {
  _id?:number;
  owner:number;
  name:string;
  longitude:number;
  latitude:number;
  location:string;
  minNumGuest:number;
  maxNumGuest:number;
  gallery:string[];
  benefits:Benefit[];
  accommodationType:AccommodationType;//enum

}
