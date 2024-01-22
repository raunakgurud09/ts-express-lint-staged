export const DB_NAME = "ts-express";
export const USER_TEMPORARY_TOKEN_EXPIRY = 20 * 60 * 1000; // 20 minutes


export const UserRolesEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
};
export type TUserRolesEnum = "ADMIN" | "USER";
export const AvailableUserRoles = Object.values(UserRolesEnum);

export const UserLoginType = {
  GOOGLE: "GOOGLE",
  GITHUB: "GITHUB",
  EMAIL_PASSWORD: "EMAIL_PASSWORD",
};
export type TUserLoginType = "GOOGLE" | "GITHUB" | "EMAIL_PASSWORD";
export const AvailableSocialLogins = Object.values(UserLoginType);
