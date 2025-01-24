import type { User } from "@/types/user";
import { checkAuthentication } from "@/utils/auth";
import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  user: User | null;
  isFirstSale: boolean;
  setAuth: (auth: Partial<AuthStore>) => void;
  clearAuth: () => void;
};

const isLoggedIn = checkAuthentication();

export const useAuthStore = create<AuthStore>()(set => ({
  isLoggedIn: !!isLoggedIn,
  isFirstSale: false,
  user: null,
  setAuth: (auth: Partial<AuthStore>) => set(auth),
  clearAuth: () => set({ isLoggedIn: false, user: null }),
}));
