import { AccommodationType } from './accommodationType';
import { Benefit } from './benefit';


export interface Accommodation {
  _id?:number;
  ownerId:number;
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
