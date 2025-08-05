import axios from "axios";
// import { applyInterceptors } from "./request";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// 일반 서버 주소로 요청 보낼 시
const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

// care section
const careInstance = axios.create(defaultInstance.defaults);
careInstance.defaults.baseURL += "/care";
// applyInterceptors(careInstance);

export { defaultInstance, careInstance };
