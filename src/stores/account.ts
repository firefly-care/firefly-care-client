import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AccountState {
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

export const useAccountStore = create<AccountState>()(
  persist(
    (set) => ({
      accessToken: null,
      login: (accessToken) =>
        set({
          accessToken,
        }),
      logout: () => {
        set({
          accessToken: null,
        });
      },
    }),
    {
      name: "auth",
    }
  )
);
