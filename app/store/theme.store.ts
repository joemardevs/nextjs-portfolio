import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ThemeStore = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const useThemeStore = create<ThemeStore>()(
  persist(
    set => ({
      theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
      toggleTheme: () =>
        set(state => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
