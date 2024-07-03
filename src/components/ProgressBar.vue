<template>
  <div class="progress-bar">
    <div class="filled" :style="style"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    required: true
  }
})

const style = computed(() => {
  return {
    width: `${props.progress}%`
  }
})
</script>

<style scoped>
.progress-bar {
  height: 8px;
  width: 400px;
  border: 2px solid #2c3e50;
  padding: 2px;
  border-radius: 16px;
}

.progress-bar .filled {
  height: 8px;
  background-color: #2c3e50;
  transition: width 0.2s;
  border-radius: 4px;
}

@media (prefers-color-scheme: dark) {
  .progress-bar {
    border-color: #ced9e4;
  }
  .progress-bar .filled {
    background-color: #ced9e4;
  }
}
</style>
