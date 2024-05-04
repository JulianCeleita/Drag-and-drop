<script setup>

import { ref } from 'vue';
import TaskCard from './components/TaskCard.vue';

// Define all the refs
const items = ref([
  { id: 2, label: 'Add drag and drop functionality', done: false, assigned: 'Julian' },
  { id: 3, label: 'Style the app', done: false, assigned: 'Julian' },
  { id: 6, label: 'Mark a task as done', done: false, assigned: 'Julian' },
  { id: 7, label: 'Clear all tasks', done: false, assigned: 'Julian' },
  { id: 8, label: 'Add a counter', done: false, assigned: 'Julian' },
  { id: 9, label: 'Add a timer', done: false, assigned: 'Julian' },
  { id: 10, label: 'Add a form', done: false, assigned: 'Julian' },
  { id: 11, label: 'Add a modal', done: false, assigned: 'Julian' },
  { id: 14, label: 'Add a progress bar', done: false, assigned: 'Julian' },
  { id: 19, label: 'Edit a card', done: false, assigned: 'Heiner' },
  { id: 20, label: 'Add a dropdown', done: false, assigned: 'Heiner' },
  { id: 21, label: 'Add a menu', done: false, assigned: 'Heiner' },
  { id: 22, label: 'Add a sidebar', done: false, assigned: 'Heiner' },
  { id: 23, label: 'Add a navbar', done: false, assigned: 'Julian' },
  { id: 24, label: 'Add a footer', done: false, assigned: 'Julian' },
  { id: 25, label: 'Add a search bar', done: false, assigned: 'Julian' },
  { id: 26, label: 'Add completed view and button', done: false, assigned: 'Julian'},
  { id: 27, label: 'Add backlog view', done: false, assigned: 'Julian' },
]);
const newTaskLabel = ref('');
const newAssignated = ref('');

console.log('Items', items.value);

// Sort the items by id
const sortedItems = ref(items.value.slice().sort((a, b) => b.id - a.id));

// Add a new task
const addTask = () => {
  const newTaskDeclared = newTaskLabel.value.trim();
  const newAssignatedDeclared = newAssignated.value.trim() || '';
  if (newTaskDeclared) {
    const lastId = items.value[items.value.length - 1]?.id || 0;
    const newTask = { id: lastId + 1, label: newTaskDeclared, done: false, assigned: newAssignatedDeclared};
    items.value.push(newTask);
    sortedItems.value = items.value.slice().sort((a, b) => b.id - a.id);
    newTaskLabel.value = '';
    newAssignated.value = '';
  }
  console.log('All tasks', items.value);
}

// Delete a task
const deleteTask = (taskId) => {
  sortedItems.value = sortedItems.value.filter((task) => task.id !== taskId);
  console.log('Task deleted from father', taskId);
}

</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <h1 class="title">Drag and Drop</h1>
        <form @submit.prevent="addTask" class="button-wrapper">
          <input v-model="newTaskLabel" type="text" placeholder="Add new task for today" />
          <input v-model="newAssignated" type="text" placeholder="Assigned to task">
          <button type="submit">Create task</button>
        </form>
      </div>
    </header>

    <main class="task-list">
      <div class="column">
        <TaskCard v-for="task in sortedItems" :key="task.id" :task="task" @deleteTask="deleteTask" />
      </div>
      <div class="column"></div>
      <div class="column"></div>
    </main>
  </div>
</template>

<!-- Styles only for this page -->
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  font-size: 2rem;
  margin: 1rem;
}

.button-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

input {
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20rem;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.task-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 1rem;
}

.task-list .column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
