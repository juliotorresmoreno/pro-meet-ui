import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthState = {
  open: "login" | "register" | null;
  setOpen: (type: "login" | "register" | null) => void;
  hydrate: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      open: null,
      setOpen: (type) => set({ open: type }),
      hydrate: () => {},
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrate();
        }
      },
    }
  )
);
