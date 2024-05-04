
<script setup>
import { defineProps, defineEmits } from 'vue';

// eslint-disable-next-line
const props = defineProps({
    task: Object,
});

const emit = defineEmits(['deleteTask']);

const deleteTask = () => {
    emit('deleteTask', props.task.id);
    console.log('Task deleted', props.task.id);
};

</script>

<template>
    <div class="task-card">
        <p>{{ task.label }}</p>
        <button>Done</button>
        <button @click="deleteTask">Delete</button>
    </div>
</template>

<style scoped>
.task-card {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding-inline: 1rem;
}
</style>;