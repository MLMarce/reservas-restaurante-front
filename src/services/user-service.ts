import { IEditData, IRegisterUser, IUserData } from "@/interfaces/user-interface";
import axios from "axios";
import { headers } from "next/headers";

export class UserService {
  private url = "http://localhost:3001/user";

  async getUserById(id: string, token: string): Promise<IUserData> {
    try {
      const { data } = await axios.get(`${this.url}/${id}`, {
        headers: { "Content-Type": "application/json", Authorization: `bearer: ${token}`},
      });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateUser( id: string, token: string, updatedUserData: IEditData): Promise<IUserData> {
    try {
      const { data } = await axios.put(
        `${this.url}/${id}`,
        updatedUserData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer: ${token}`,
          },
        }
      );
      return data;
    } catch (error: any) {
      return error;
    }
  }
}
