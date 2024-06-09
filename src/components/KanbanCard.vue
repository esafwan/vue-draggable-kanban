<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: Object
});
</script>

<template>
  <div class="card m-1 p-2">
    <p>{{ data.name }}</p>
    <span>Assigned: {{ data.assigned }}</span>
  </div>
</template>

