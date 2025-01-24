import { create } from "zustand";
import type { ComponentScreen } from "./types";

type HistoryState = {
  value: ComponentScreen;
  pointer: number;
  goToNext: () => void;
  goToPrevious: () => void;
  goTo: (screen: ComponentScreen) => void;
};

const screens: ComponentScreen[] = [
  "email",
  "verifyEmail",
  "password",
  "name",
  "companyName",
  "companyWebsite",
  "jobDetails",
  "allDone",
] as const;

export const useHistoryStore = create<HistoryState>(set => ({
  value: "email",
  pointer: 0,
  goToNext: () => {
    set(state => ({
      pointer: (state.pointer + 1) % screens.length,
      value: screens[state.pointer + 1],
    }));
  },
  goToPrevious: () => {
    set(state => ({
      pointer: (state.pointer - 1 + screens.length) % screens.length,
      value: screens[state.pointer - 1],
    }));
  },
  goTo: (screen: ComponentScreen) => {
    const index = screens.indexOf(screen);
    set({ pointer: index, value: screen });
  },
}));
