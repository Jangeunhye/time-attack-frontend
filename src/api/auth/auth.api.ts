import { AxiosInstance } from "axios";
import { LogInDto, SignUpDto } from "./auth.dto";

class AuthAPI {
  private coreClient: AxiosInstance;
  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  logIn = async (dto: LogInDto) => {
    const url = "/auth/log-in";
    const response = await this.coreClient.post(url, dto);
    const data = response.data;

    return data;
  };

  logOut = async () => {
    const url = "/auth/log-out";
    const response = await this.coreClient.delete(url);
    const data = response.data;

    return data;
  };

  signUp = async (dto: SignUpDto) => {
    const url = "/auth/sign-up";
    const response = await this.coreClient.post(url, dto);
    const data = response.data;
    return data;
  };

  refreshToken = async () => {
    const url = "/auth/refresh-token";
    const response = await this.coreClient.get(url);
    const data = response.data;
    return data;
  };
}
export default AuthAPI;
