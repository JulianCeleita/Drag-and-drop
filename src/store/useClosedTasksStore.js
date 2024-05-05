import { create } from 'zustand';

export const useClosedTasksStore = create((set) => ({
    closedTasks: [],

    addClosedTask: (closedTask) => set((state) => ({ closedTasks: [...state.closedTasks, closedTask] })),
    removeClosedTask: (closedTask) => set((state) => ({ closedTasks: state.closedTasks.filter((item) => item !== closedTask) })),
    clearClosedTasks: () => set({ closedTasks: [] }),
}));