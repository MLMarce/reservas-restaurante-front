import axios from "axios";

interface IUser {
  name: string;
  email: string;
  image?: string;
  password?: string;
}

export class AuthService {
  private url = "http://localhost:3001/auth";

  async createUserAuth(email:string): Promise<any> {
    try {
      const { data } = await axios.post(`${this.url}/auth/signup-auth0`, {
        email,
      });
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
