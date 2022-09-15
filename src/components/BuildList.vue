<template>
  <div>
    <h3><slot></slot> ({{ list.length }})</h3>
    <div class="build-status">
      <StatusItem
        v-for="k in list"
        :keyboardItem="k"
        :key="k.key"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script>
import StatusItem from '@/components/StatusItem';

export default {
  name: 'BuildList',
  components: { StatusItem },
  props: {
    list: Array,
  },
};
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
