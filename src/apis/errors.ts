import { AxiosError } from "axios";

export const handleApiError = (error: unknown): never => {
  if (isAxiosError(error)) {
    if (error.response) {
      const errorMessage =
        getErrorMessage(error.response.data) ||
        `서버 오류: ${error.response.status}`;
      throw new Error(errorMessage);
    }

    if (error.request) {
      const msg = error.message.toLowerCase();
      if (msg.includes("cors") || msg.includes("network error")) {
        throw new Error("CORS 또는 네트워크 오류: 서버에 접근할 수 없습니다.");
      }
      throw new Error("서버로부터 응답을 받지 못했습니다.");
    }

    throw new Error(`요청 설정 중 오류 발생: ${error.message}`);
  }
  throw new Error("알 수 없는 에러가 발생했습니다.");
};

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}

function getErrorMessage(data: unknown): string | undefined {
  if (typeof data === "object" && data !== null) {
    const obj = data as Record<string, unknown>;
    if (typeof obj.message === "string") return obj.message;
  }
  return undefined;
}
