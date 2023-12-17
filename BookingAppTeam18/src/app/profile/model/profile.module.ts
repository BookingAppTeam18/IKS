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
