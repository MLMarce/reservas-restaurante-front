import axios from "axios";

export interface IUser {
  name: string | null | undefined;
  email: string;
  img?: string | null | undefined;
  password?: string;
}

export class AuthService {
  private url = "http://localhost:3001/auth";

  async createUserAuth(user: IUser): Promise<any> {
    try {
      const { data } = await axios.post(`${this.url}/signup-auth0`, user);
      return data;
    } catch (error: any) {
      return error;
    }
  }
}
