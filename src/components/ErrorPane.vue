<template>
  <Transition name="backdrop">
    <div v-if="visible" id="backdrop" @click="$emit('backdropClicked')"></div>
  </Transition>
  <Transition name="error-pane">
    <div v-if="visible" id="error-pane">
      <div id="error-title">
        <h4>Detailed Error Log</h4>
      </div>
      <div id="error-text">
        <pre v-html="colorizedErrorLog"></pre>
      </div>
    </div>
  </Transition>
</template>

<script>
import Convert from 'ansi-to-html'

const ansiConverter = new Convert({ escapeXML: true })

export default {
  name: 'ErrorPane',
  props: {
    errorLog: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  emits: ['backdropClicked'],
  computed: {
    colorizedErrorLog() {
      return ansiConverter.toHtml(this.errorLog)
    }
  }
}
</script>

<style scoped>
#error-pane {
  position: fixed;
  top: 3%;
  display: grid;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
  height: 90%;
  grid-template: 50px 1fr / 100%;
  background: #fffff0f5;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 30px;
}

#error-title {
  grid-column: 1;
  grid-row: 1;
}
#error-text {
  grid-column: 1;
  grid-row: 2;
  text-align: left;
  overflow: auto;
  margin: 6px;
}

#backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.2s ease;
}

.error-pane-enter-from,
.error-pane-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.error-pane-enter-active,
.error-pane-leave-active {
  transition: all 0.1s ease;
}

@media (prefers-color-scheme: dark) {
  #error-pane {
    background: #303030f5;
  }
}
</style>
