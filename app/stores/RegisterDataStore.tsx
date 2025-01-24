import type { RegisterData } from "@/utils/validations/auth";
import { create } from "zustand";

interface RegisterDataState {
  data: RegisterData;
  setData: (data: RegisterData) => void;
}

const useRegisterDataStore = create<RegisterDataState>(set => ({
  data: {} as RegisterData,
  setData: data => set({ data }),
}));

export default useRegisterDataStore;
