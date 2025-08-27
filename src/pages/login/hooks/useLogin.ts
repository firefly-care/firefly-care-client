import { useMutation } from "@tanstack/react-query";
import { LoginAPI } from "@/apis/account";

export const useLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: LoginAPI,
  });

  const login = async (id: string, password: string) => {
    const data = await mutateAsync({ id, password });
    const accessToken = data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return accessToken;
  };

  return { login, isPending };
};
