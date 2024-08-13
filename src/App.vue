<template>
  <h1>QMK API Keyboard Status</h1>
  <Suspense>
    <BuildOverview @progress="(p) => (loadProgress = p)" />

    <template #fallback>
      <div id="loading">
        <ProgressBar :progress="loadProgress" />
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref } from 'vue'

import BuildOverview from '@/components/BuildOverview.vue'
import ProgressBar from '@/components/ProgressBar.vue'

const loadProgress = ref(0)
</script>

<style>
body {
  background: #fff;
  color: #2c3e50;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

#loading {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #202020;
    color: #ced9e4;
  }
}
</style>
