import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
  username: string;
  role: number | null;
  setAuth: (username: string, role: number) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, _) => ({
      username: "",
      role: null,
      setAuth: (username, role) =>
        set((_) => ({
          username,
          role,
        })),
      logout: () => set({ username: "", role: null }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
