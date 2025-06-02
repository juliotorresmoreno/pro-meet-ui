import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PathState = {
  path: string;
  setPath: (path: string) => void;
};

export const usePathStore = create<PathState>()(
  persist(
    (set) => ({
      path: "",
      setPath: (path) => set({ path }),
    }),
    {
      name: "path-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ path: state.path }),
    }
  )
);
