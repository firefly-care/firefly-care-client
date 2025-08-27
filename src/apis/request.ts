import type {
  AxiosInstance,
  AxiosRequestConfig,
  Method,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { handleApiError } from "./errors";

// 백엔드 response 형식 맞춰서 변환
interface ApiSuccess<T> {
  status: number;
  message: string;
  data: T;
}

interface ApiFailure {
  status: number;
  message: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export const sendRequest = async <T = unknown, D = unknown>(
  instance: AxiosInstance,
  method: Method,
  url: string,
  data?: D,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      ...(method.toUpperCase() === "GET" ? { params: data } : { data }),
    };

    const response: AxiosResponse<ApiResponse<T>> = await instance.request(
      config
    );

    if ("data" in response.data) {
      console.log(`✅ ${url} [${method}] Success:`, response.data.data);
      return response.data.data;
    }

    throw new Error(response.data.message ?? "요청 실패");
  } catch (error: unknown) {
    handleApiError(error);
    return undefined as never;
  }
};

// 동적 URL 생성
export const createUrl = (
  path: string,
  params: Record<string, string> = {}
): string => {
  const query = new URLSearchParams(params).toString();
  return `${path}${query ? `?${query}` : ""}`;
};

export const applyInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("accessToken");

      // 로그인 전에는 인터셉터 제외
      const excludedPaths = ["/account/login"];

      const isExcluded = excludedPaths.some((path) =>
        config.url?.includes(path)
      );

      if (isExcluded) return config;

      if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
        return config;
      }
      return config;
    },
    (error) => {
      console.error("🚨 Request Interceptor Error:", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const status = error.response?.status;
      const url = error.config?.url;

      // 공통 로깅만 수행 (재발급 로직 제거)
      if (status) {
        console.error(
          `❌ Response Error [${status}] ${url ?? ""}:`,
          error.response?.data ?? error.message
        );
      } else {
        console.error("❌ Response Error (no status):", error.message);
      }

      if (status === 401 || status === 403) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.replace("/login");
      }

      return Promise.reject(error);
    }
  );
};
