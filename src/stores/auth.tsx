import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AuthState = {
  status: "authenticated" | "unauthenticated" | "loading";
  setStatus: (status: "authenticated" | "unauthenticated" | "loading") => void;
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
  hydrate: () => void;
};

const getDefaultAccessToken = () => {
  return "";
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      status: "loading",
      setStatus: (status) => set({ status: status }),
      accessToken: "",
      setAccessToken: (accessToken) => {
        set({ accessToken: accessToken });
        if (accessToken) {
          set({ status: "authenticated" });
        } else {
          set({ status: "unauthenticated" });
        }
      },
      refreshToken: "",
      setRefreshToken: (refreshToken) => set({ refreshToken: refreshToken }),
      hydrate: () => {},
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrate();
        }
      },
    }
  )
);

export const initializeLanguageStore = () => {
  return useAuthStore.setState({
    accessToken: getDefaultAccessToken(),
  });
};
