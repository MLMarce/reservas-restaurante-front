import { IUser} from "@/interfaces/user-interface";
import axios from "axios";

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
