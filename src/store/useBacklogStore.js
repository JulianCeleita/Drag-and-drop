import { create } from 'zustand';

export const useBacklogStore = create((set) => ({
    backlog: [],

    addBacklog: (backlog) => set((state) => ({ backlog: [...state.backlog, backlog] })),
    removeBacklog: (backlog) => set((state) => ({ backlog: state.backlog.filter((item) => item !== backlog) })),
    clearBacklog: () => set({ backlog: [] }),
}));