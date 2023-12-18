import { UserType } from "./userType"

export interface Profile{
    id?:number;
    firstName:string;
    lastName:string;
    email:string;
    password: string;
    phone:string;
    address:string;
    userType: UserType;
}
export const anonymus: Profile = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  userType: UserType.ANONYMUS
};