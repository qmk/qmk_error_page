<template>
  <div>
    <h3><slot /> ({{ filteredItems.length }})</h3>
    <div class="build-status">
      <StatusItem v-for="k in filteredItems" :keyboardItem="k" :key="k.key" v-bind="$attrs" />
    </div>
  </div>
</template>

<script>
import StatusItem from '@/components/StatusItem.vue'

export default {
  name: 'BuildList',
  components: { StatusItem },
  props: {
    list: Array,
    filter: String
  },
  computed: {
    filteredItems() {
      return this.list.filter((k) => {
        return k.key.toLowerCase().includes(this.filter.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>
.build-status {
  display: grid;
  grid-template: 1fr / repeat(5, 20%);
  grid-auto-rows: 1fr;
}

@media (max-width: 640px) {
  .build-status {
    display: grid;
    grid-template: 1fr / 50% 50%;
  }
}
</style>
