import { create } from 'zustand';

export const useCompletedStore = create((set) => ({
    completed: [],

    addCompleted: (completed) => set((state) => ({ completed: [...state.completed, completed] })),
    removeCompleted: (completed) => set((state) => ({ completed: state.completed.filter((item) => item !== completed) })),
    clearCompleted: () => set({ completed: [] }),
}));