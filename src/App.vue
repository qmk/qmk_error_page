<template>
  <ErrorReport />
</template>

<script>
import ErrorReport from '@/components/ErrorReport.vue'

export default {
  name: 'App',
  components: { ErrorReport }
}
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

@media (prefers-color-scheme: dark) {
  body {
    background: #202020;
    color: #ced9e4;
  }
}
</style>
