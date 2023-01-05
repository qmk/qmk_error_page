<template>
  <h3><slot /> ({{ filteredItems.length }})</h3>
  <div class="build-list">
    <BuildListItem
      v-for="k in filteredItems"
      :keyboardItem="k"
      :key="k.key"
      @click="emit('showErrorPane', k.key)"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

import BuildListItem from '@/components/BuildListItem.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true
  },
  filter: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['showErrorPane'])

const filteredItems = computed(() =>
  props.list.filter(({ key }) => key.toLowerCase().includes(props.filter.toLowerCase()))
)
</script>

<style scoped>
.build-list {
  display: grid;
  grid-template: 1fr / repeat(5, 20%);
  grid-auto-rows: 1fr;
}

@media (max-width: 640px) {
  .build-list {
    display: grid;
    grid-template: 1fr / 50% 50%;
  }
}
</style>
