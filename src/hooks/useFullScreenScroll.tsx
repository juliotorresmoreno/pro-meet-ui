import { useEffect } from "react";

export function useFullScreenScroll() {
  useEffect(() => {
    document.documentElement.classList.add("full-screen");
    document.body.classList.add("full-screen");
    document.documentElement.classList.add("scrollbar-visible");

    return () => {
      document.documentElement.classList.remove("full-screen");
      document.body.classList.remove("full-screen");
      document.documentElement.classList.remove("scrollbar-visible");
    };
  }, []);
}
