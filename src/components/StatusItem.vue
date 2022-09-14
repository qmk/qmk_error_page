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
import { format } from 'timeago.js';

export default {
  name: 'StatusItem',
  components: {},
  props: ['keyboardItem'],
  computed: {
    keyboardName() {
      let firstSlash = this.keyboardItem.key.indexOf('/');
      if (firstSlash < 0) return '';
      return this.keyboardItem.key.slice(
        firstSlash + 1,
        this.keyboardItem.key.length
      );
    },
    vendorName() {
      return this.keyboardItem.key.split('/')[0];
    },
    lastTestedTitle() {
      return `Last tested: ${format(
        this.keyboardItem.lastTested
      )} (${this.keyboardItem.lastTested.toLocaleString()})
${this.keyboardItem.lastTested.toISOString()}`;
    },
  },
};
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
