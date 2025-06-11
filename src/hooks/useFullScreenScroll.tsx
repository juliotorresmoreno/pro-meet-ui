import { useEffect } from "react";

export function useFullScreenScroll() {
  useEffect(() => {
    document.documentElement.classList.add("scrollbar-visible");

    return () => {
      document.documentElement.classList.remove("scrollbar-visible");
    };
  }, []);
}
