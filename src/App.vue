<template>
  <div id="app">
    <ErrorReport />
  </div>
</template>

<script>
import ErrorReport from '@/components/ErrorReport';
export default {
  name: 'App',
  components: { ErrorReport }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
