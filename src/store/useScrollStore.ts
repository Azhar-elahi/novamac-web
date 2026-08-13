import { create } from 'zustand';

interface ScrollState {
  progress: number;
  sceneIndex: number;
  isTransitioned: boolean;
  setProgress: (p: number) => void;
  setSceneIndex: (idx: number) => void;
  setTransitioned: (val: boolean) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  progress: 0,
  sceneIndex: 0,
  isTransitioned: false,
  setProgress: (p) => set({ progress: p }),
  setSceneIndex: (idx) => set({ sceneIndex: idx }),
  setTransitioned: (val) => set({ isTransitioned: val }),
}));
