import { create } from "zustand";
import { devtools } from "zustand/middleware";

type QueryClientDevToolsStore = {
  showDevTools: boolean;
  setShowDevTools: (isOpen: boolean) => void;
};

export const useQueryClientDevTools = create<QueryClientDevToolsStore>()(
  devtools((set) => ({
    showDevTools: false,
    setShowDevTools: (showDevTools) => set({ showDevTools }),
  })),
);
