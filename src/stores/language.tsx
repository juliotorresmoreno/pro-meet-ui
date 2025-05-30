import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LanguageState = {
  language: "en" | "es";
  setLanguage: (lang: "en" | "es") => void;
  hydrate: () => void;
};

const getDefaultLanguage = (): "en" | "es" => {
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
