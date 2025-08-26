import { useMutation } from "@tanstack/react-query";
import { LoginAPI } from "@/apis/account";

export const useLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: LoginAPI,
  });

  const login = async (id: string) => {
    const res = await mutateAsync({ id });

    if ("data" in res) {
      const accessToken = res.data;
      localStorage.setItem("accessToken", accessToken);
      return accessToken;
    }
  };

  return { login, isPending };
};
