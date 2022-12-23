<template>
  <h3><slot /> ({{ filteredItems.length }})</h3>
  <div class="build-list">
    <BuildListItem v-for="k in filteredItems" :keyboardItem="k" :key="k.key" @click="$emit('showErrorPane', k.key)" />
  </div>
</template>

<script>
import BuildListItem from '@/components/BuildListItem.vue'

export default {
  name: 'BuildList',
  components: { BuildListItem },
  props: {
    list: Array,
    filter: String
  },
  emits: ['showErrorPane'],
  computed: {
    filteredItems() {
      return this.list.filter((k) => k.key.toLowerCase().includes(this.filter.toLowerCase()))
    }
  }
}
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
