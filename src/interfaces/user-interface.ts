import { Role } from "@/enums/role.enum";

export interface IUser {
  name: string | null | undefined;
  email: string;
  img?: string | null | undefined;
  password?: string;
}

export interface IUserData {
    email: string;
    id: string;
    img: string | null | undefined;
    name: string;
    phone: number | null | undefined;
    role: Role;
}

export interface ILoginResponse {
    message: string;
    token: string;
    userData: IUserData
}

export interface IEditData {
  name: string | undefined,
  phone: string | number | undefined 
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  phone: number;
}