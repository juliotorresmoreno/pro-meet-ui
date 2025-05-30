import { Lang } from "@/utils/language";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LanguageState = {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  hydrate: () => void;
};

const getDefaultLanguage = (): Lang => {
  return "en";
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: getDefaultLanguage(),
      setLanguage: (lang) => set({ language: lang }),
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

// Función para usar en el servidor
export const initializeLanguageStore = (initialLanguage?: "en" | "es") => {
  return useLanguageStore.setState({
    language: initialLanguage || getDefaultLanguage(),
  });
};
