<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import draggable from 'vuedraggable';

const store = useStore();
const props = defineProps({
  data: Object
});
const cards = ref([...props.data.col]);

const updateColumn = (newCards) => {
  store.commit('updateColumnCards', { columnId: props.data.id, cards: newCards });
};

onMounted(() => {
  cards.value.sort((a, b) => a.index - b.index); // Ensure cards are sorted by index initially
});

const onEnd = (event) => {
  
  console.log(`Moved card from index ${event.oldIndex} to ${event.newIndex} within column ${props.data.name}`);
  updateColumn(cards.value);
};
</script>

<template>
  <div class="card m-2">
    <h3>{{ props.data.name }}</h3>
    <draggable class="list-group" v-model="cards" group="cards" @end="onEnd" item-key="id">
      <template #item="{ element }">
        <div class="list-group-item">
        <p>{{ element.name }}</p>
        <span>Assigned: {{ element.assigned }}</span>
      </div>
      </template>
    </draggable>
  </div>
</template>
