<script setup>
import { ref } from 'vue';
import KanbanColumn from './KanbanColumn.vue';
import { useStore } from 'vuex';
import draggable from 'vuedraggable';

const store = useStore();
const columns = ref(store.state.columns);  // Ensure this is always an array

</script>

<template>
  <div class="container">    
    <draggable class="d-flex justify-content-start" v-model="columns" group="columns" @end="onEnd" item-key="id">
      <template #item="{ element }">
        <KanbanColumn :key="element.id" :data="element" />
      </template>
    </draggable>
  </div>
</template>
