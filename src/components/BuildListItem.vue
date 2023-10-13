<template>
  <div
    class="build-list-item"
    :class="keyboardItem.passed ? (keyboardItem.warnings ? 'warning' : 'passed') : 'failed'"
    :title="lastTestedTitle"
  >
    {{ vendorName }}
    <br />
    {{ keyboardName }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { format } from 'timeago.js'

const props = defineProps({
  keyboardItem: {
    type: Object,
    required: true
  }
})

const keyboardName = computed(() => {
  const { key } = props.keyboardItem
  const firstSlash = key.indexOf('/')

  if (firstSlash < 0) return ''

  return key.slice(firstSlash + 1, key.length)
})

const vendorName = computed(() => props.keyboardItem.key.split('/')[0])

const lastTestedTitle = computed(() => {
  const { lastTested } = props.keyboardItem
  return `Last tested: ${format(lastTested)} (${lastTested.toLocaleString()})
${lastTested.toISOString()}`
})
</script>

<style scoped>
.build-list-item {
  cursor: pointer;
  color: #eee;
  margin: 5px;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 8px;
  display: grid;
  align-self: stretch;
  align-items: center;
  justify-content: center;
}

.build-list-item.passed {
  background: #2e8b57;
}
.build-list-item.passed:hover {
  background: #3f9c68;
}

.build-list-item.warning {
  background: #be863b;
}
.build-list-item.warning:hover {
  background: #cf973b;
}

.build-list-item.failed {
  background: #b22222;
}
.build-list-item.failed:hover {
  background: #c33333;
}
</style>
