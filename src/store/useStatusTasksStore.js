import { create } from 'zustand';

const useStatusTasksStore = create((set) => ({
    notStarted: [
        { id: 1, label: 'Add new drag and drop functionality', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 2, label: 'Style the app', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 3, label: 'Mark a task as done', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 4, label: 'Clear all tasks', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 5, label: 'Add a counter', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 6, label: 'Add a timer', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 7, label: 'Add a form', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 8, label: 'Add a modal', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 9, label: 'Add a progress bar', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 10, label: 'Edit a card', done: false, assigned: 'Heiner', status: 'Not stated' },
        { id: 11, label: 'Add a dropdown', done: false, assigned: 'Heiner', status: 'Not stated' },
        { id: 12, label: 'Add a menu', done: false, assigned: 'Heiner', status: 'Not stated' },
        { id: 13, label: 'Add a sidebar', done: false, assigned: 'Heiner', status: 'Not stated' },
        { id: 14, label: 'Add a navbar', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 15, label: 'Add a footer', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 16, label: 'Add a search bar', done: false, assigned: 'Julian', status: 'Not stated' },
        { id: 17, label: 'Add completed view and button', done: false, assigned: 'Julian', status: 'Not started'},
        { id: 18, label: 'Add backlog view', done: false, assigned: 'Julian', status: 'Not stated' },
      ],
    inProgress: [],
    completed: [],

    setNotStarted: (notStarted) => set((state) => ({ notStarted: [...state.notStarted, notStarted] })),
    setInProgress: (inProgress) => set((state) => ({ inProgress: [...state.inProgress, inProgress] })),
    setCompleted: (completed) => set((state) => ({ completed: [...state.completed, completed] })),

}));

export const { getState, setState, subscribe } = useStatusTasksStore;

export default useStatusTasksStore;