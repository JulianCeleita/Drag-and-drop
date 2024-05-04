<script setup>

import { ref } from 'vue';
import TaskCard from './components/TaskCard.vue';

// Define all the refs
const items = ref([
  { id: 1, label: 'Create app with Vue and Vite', done: false },
  { id: 2, label: 'Add drag and drop functionality', done: false },
  { id: 3, label: 'Style the app', done: false },
  { id: 4, label: 'Add a new task', done: false },
  { id: 5, label: 'Remove a task', done: false },
  { id: 6, label: 'Mark a task as done', done: false },
  { id: 7, label: 'Clear all tasks', done: false },
  { id: 8, label: 'Add a counter', done: false },
  { id: 9, label: 'Add a timer', done: false },
  { id: 10, label: 'Add a form', done: false },
  { id: 11, label: 'Add a modal', done: false },
  { id: 12, label: 'Add a carousel', done: false },
  { id: 13, label: 'Add a slider', done: false },
  { id: 14, label: 'Add a progress bar', done: false },
  { id: 15, label: 'Add a chart', done: false },
  { id: 16, label: 'Add a map', done: false },
  { id: 17, label: 'Add a table', done: false },
  { id: 18, label: 'Add a list', done: false },
  { id: 19, label: 'Add a card', done: false },
  { id: 20, label: 'Add a dropdown', done: false },
  { id: 21, label: 'Add a menu', done: false },
  { id: 22, label: 'Add a sidebar', done: false },
  { id: 23, label: 'Add a navbar', done: false },
  { id: 24, label: 'Add a footer', done: false },
  { id: 25, label: 'Add a search bar', done: false },
]);
const newTaskLabel = ref('');

// Sort the items by id
const sortedItems = ref(items.value.slice().sort((a, b) => b.id - a.id));

// Add a new task
const addTask = () => {
  const newTaskDeclared = newTaskLabel.value.trim();
  if (newTaskDeclared) {
    const newTask = { id: items.value.length + 1, label: newTaskDeclared, done: false };
    items.value.push(newTask);
    sortedItems.value = items.value.slice().sort((a, b) => b.id - a.id);
    newTaskLabel.value = '';
    console.log(sortedItems.value)
  }
}

// Delete a task
const deleteTask = (taskId) => {
  items.value = items.value.filter((task) => task.id !== taskId);
}

</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <h1 class="title">Drag and Drop</h1>
        <div class="button-wrapper">
          <input v-model="newTaskLabel" type="text" placeholder="Add your new task here for today" />
          <button @click="addTask">Create task</button>
        </div>
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
