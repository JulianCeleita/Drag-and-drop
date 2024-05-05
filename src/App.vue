<script setup>

import { ref } from 'vue';
import TaskCard from './components/TaskCard.vue';
import { getState, setState, subscribe } from './store/useStatusTasksStore';

// Define all the refs
const newTaskLabel = ref('');
const newAssignated = ref('');

// Get the initial state to the tasks
const notStartedTask = ref(getState().notStarted.sort((a, b) => b.id - a.id));

// Add a new task
const addTask = () => {
  const newTaskDeclared = newTaskLabel.value.trim();
  const newAssignatedDeclared = newAssignated.value.trim() || '';
  if (newTaskDeclared) {
    const lastId = notStartedTask.value.length > 0 ? notStartedTask.value[0].id : 0;
    const newTask = { id: lastId + 1, label: newTaskDeclared, done: false, assigned: newAssignatedDeclared };
    setState((state) => ({
      ...state,
      notStarted: [...state.notStarted, newTask],
    }));
    // Update the notStartedTask ordered by id
    notStartedTask.value = [...notStartedTask.value, newTask].sort((a, b) => b.id - a.id);
    newTaskLabel.value = '';
    newAssignated.value = '';
    console.log('Task added', newTask);
  }
  console.log('All tasks', notStartedTask.value);
}

// Delete a task
const deleteTask = (taskId) => {
  notStartedTask.value = notStartedTask.value.filter((task) => task.id !== taskId);
  console.log('Task deleted from father', taskId);
}

</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <h1 class="title">Drag and Drop</h1>
        <form @submit.prevent="addTask" class="button-wrapper">
          <input v-model="newTaskLabel" type="text" placeholder="Add new task for today" required>
          <input v-model="newAssignated" type="text" placeholder="Assigned to task">
          <button type="submit">Create task</button>
        </form>
      </div>
    </header>

    <main class="task-list">
      <div class="column">
        <TaskCard v-for="task in notStartedTask" :key="task.id" :task="task" @deleteTask="deleteTask" />
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
