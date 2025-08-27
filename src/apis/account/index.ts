import { defaultInstance } from "../instance";
import { sendRequest } from "../request";

interface LoginRequest {
  id: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

export const LoginAPI = async ({ id, password }: LoginRequest) => {
  const data = await sendRequest<LoginResponse>(
    defaultInstance,
    "post",
    `/account/login`,
    {
      id: id,
      password: password,
    }
  );
  return data;
};
