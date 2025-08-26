import { defaultInstance } from "../instance";
import { sendRequest } from "../request";

// interface LoginRequest {
//   id: string;
//   password: string;
// }

// interface LoginResponse {
//   accessToken: string;
// }

// export const LoginAPI = async ({ id, password }: LoginRequest) => {
//   await sendRequest<LoginResponse>(defaultInstance, "post", `/account/login`, {
//     id: id,
//     password: password,
//   });
// };

interface LoginRequest {
  id: string;
}

export const LoginAPI = async ({ id }: LoginRequest) => {
  return await sendRequest<string>(defaultInstance, "post", `/token/${id}`, {
    id: Number(id),
  });
};
