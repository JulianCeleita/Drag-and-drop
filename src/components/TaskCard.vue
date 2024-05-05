
  
  <script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
  
  const props = defineProps({
      task: Object,
  });
  
  const emit = defineEmits(['deleteTask']);
  
  const deleteTask = () => {
      emit('deleteTask', props.task.id);
      console.log('Task deleted', props.task.id);
  };
  
  const dragStart = (event) => {
      event.dataTransfer.setData('text/plain', JSON.stringify(props.task));
      console.log('Drag started');
  };
  
  const dragEnd = () => {
      console.log('Drag ended');
  };
  </script>
  
  <template>
    <div class="task-card" draggable="true" @dragstart="dragStart" @dragend="dragEnd()">
      <div class="task-content">
        <p><span>Assigned:</span> {{ task.assigned }}</p>
        <h3>{{ task.label }}</h3>
      </div>
      <div class="task-actions">
        <button class="delete-button" @click="deleteTask">
          <FontAwesomeIcon :icon="faTrashAlt" />
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .task-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1rem;
      background-color: #c7e3f7;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
      user-select: none;
      position: relative;
      font-family: 'Arial', sans-serif;
  }
  
  .task-card:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transform: scale(1.01);
      transition: box-shadow 0.3s ease;
  }
  
  .task-content {
      flex: 1;
  }
  
  .task-content h3 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
  }
  
  .task-content p {
      margin: 0;
      color: #1f007d;
  }
  
  .task-content p span {
      font-weight: bold;
  }
  .task-actions {
      position: absolute;
      top: 0;
      right: 0;
  }
  
  .delete-button {
      background-color: transparent;
      color: #1f007d;
      border: none; 
      padding: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;
      transition: color 0.3s ease;
  }
  
  .delete-icon:hover {
      color: #44d64e;
  }
  </style>
  