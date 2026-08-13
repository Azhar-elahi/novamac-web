import { create } from 'zustand';

interface UIState {
  isLandingMode: boolean;
  setLandingMode: (value: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLandingMode: true,
  setLandingMode: (value) => set({ isLandingMode: value }),
}));
