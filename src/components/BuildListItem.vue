<template>
  <div
    class="keyboard-status"
    :class="keyboardItem.passed ? 'passed' : 'failed'"
    :title="lastTestedTitle"
    @click="$emit('show-error-pane', keyboardItem.key)"
  >
    {{ vendorName }}
    <br />
    {{ keyboardName }}
  </div>
</template>

<script>
import { format } from 'timeago.js'

export default {
  name: 'BuildListItem',
  props: {
    keyboardItem: Object
  },
  computed: {
    keyboardName() {
      const { key } = this.keyboardItem
      const firstSlash = key.indexOf('/')

      if (firstSlash < 0) return ''

      return key.slice(firstSlash + 1, key.length)
    },
    vendorName() {
      return this.keyboardItem.key.split('/')[0]
    },
    lastTestedTitle() {
      const { lastTested } = this.keyboardItem
      return `Last tested: ${format(lastTested)} (${lastTested.toLocaleString()})
${lastTested.toISOString()}`
    }
  }
}
</script>

<style scoped>
.keyboard-status {
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

.keyboard-status.passed {
  background: #2e8b57;
}
.keyboard-status.passed:hover {
  background: #3f9c68;
}

.keyboard-status.failed {
  background: #b22222;
}
.keyboard-status.failed:hover {
  background: #c33333;
}
</style>
