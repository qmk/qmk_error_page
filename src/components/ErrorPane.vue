<template>
  <div>
    <div class="backdrop" @click="$emit('backdrop-clicked')"></div>
    <div class="error-pane">
      <div class="error-title">
        <h4>Detailed Error Log</h4>
      </div>
      <div class="error-text">
        <pre v-html="colorizedErrorLog"></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Convert from 'ansi-to-html';

export default {
  name: 'ErrorPane',
  props: ['errorLog'],
  data: () => {
    return {
      ansiConverter: new Convert({ escapeXML: true }),
    };
  },
  computed: {
    colorizedErrorLog() {
      return this.ansiConverter.toHtml(this.errorLog);
    },
  },
};
</script>

<style scoped>
.error-pane {
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

.error-title {
  grid-column: 1;
  grid-row: 1;
}
.error-text {
  grid-column: 1;
  grid-row: 2;
  text-align: left;
  overflow: auto;
  margin: 6px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
</style>
