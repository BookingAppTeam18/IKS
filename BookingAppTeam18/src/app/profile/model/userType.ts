export enum UserType{
    ADMIN,
    OWNER,
    GUEST,
    ANONYMUS
}
export namespace UserTypeHelper {
  export function stringToEnumValue(userType: string | number): UserType {
    if (typeof userType === 'string') {
      return UserType[userType as keyof typeof UserType] as UserType;
    }
    return userType as UserType;
  }
}
