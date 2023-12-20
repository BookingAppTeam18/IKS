import { AccommodationType } from './accommodationType';
import { Benefit } from './benefit';


export interface AccommodationInfo {
  id:number;
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
  rating:number;
  nextPrice:number;

}
