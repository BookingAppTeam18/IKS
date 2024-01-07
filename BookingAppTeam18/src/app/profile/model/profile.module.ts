import { UserState } from "./userState";
import { UserType } from "./userType";
import {Comment} from "../comments/model/comment";

export interface Profile{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password: string;
    phone:string;
    address:string;
    userType: UserType;
    userState? : UserState;
}

export interface ProfileDTO{
  profile:Profile
  profileComments:Comment[]
}
export const anonymus: Profile = {
  id:-1,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  userType: UserType.ANONYMUS
};
