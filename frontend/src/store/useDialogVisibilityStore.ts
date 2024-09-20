import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface DialogVisibilityState {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
}

export const useDialogVisibilityStore = create<DialogVisibilityState>()(
  immer((set) => ({
    isVisible: false,
    setVisible: (isVisible: boolean) =>
      set((state) => {
        state.isVisible = isVisible;
      }),
  }))
);
