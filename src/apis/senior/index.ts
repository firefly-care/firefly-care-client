import { seniorInstance } from "../instance";
import { sendRequest } from "../request";
import type { SeniorResponseType } from "./types";

export const FetchSeniorAPI = async () => {
  return await sendRequest<SeniorResponseType[]>(seniorInstance, "get", ``);
};
