<template>
  <div id="app">
    <h1>QMK API Keyboard Status</h1>
    <h3>Builds Failing ({{ sortedKeyboards.badlist.length }})</h3>
    <div class="build-status">
      <div
        v-for="k in sortedKeyboards.badlist"
        :key="sortedKeyboards.bad[k].key"
        :title="sortedKeyboards.bad[k].title"
        class="keyboard-status keyboard-failed">
        <a :href="sortedKeyboards.bad[k].url">
          {{ sortedKeyboards.bad[k].name }}
        </a> <br>
        {{ sortedKeyboards.bad[k].layout }}
      </div>
    </div>
    <h3>Builds Passing ({{ sortedKeyboards.goodlist.length }})</h3>
    <div class="build-status">
      <div
        v-for="k in sortedKeyboards.goodlist"
        :key="sortedKeyboards.good[k].key"
        :title="sortedKeyboards.good[k].title"
        class="keyboard-status keyboard-passed">
        <a :href="sortedKeyboards.good[k].url">
          {{ sortedKeyboards.good[k].name }}
        </a> <br>
        {{ sortedKeyboards.good[k].layout }}
      </div>
    </div>
  </div>
</template>

<script>
import {reduce, keys} from 'lodash';
import axios from 'axios';
export default {
  name: 'App',
  components: {},
  data: () => {
    return {
      keyboards: {},
      sortedKeyboards: {
        good: {},
        bad: {},
        goodlist: [],
        badlist: [],
      },
    };
  },
  mounted() {
    axios.get('http://api.qmk.fm/v1/keyboards/build_status').then((res) => {
      if (res.status === 200) {
        this.keyboards = res.data;
        this.sortKeyboards();
      }
    });
  },
  methods: {
    sortKeyboards() {
      let obj = reduce(
        this.keyboards,
        (acc, value, key) => {
          let split = key.lastIndexOf('/');
          key = {
            name: key.slice(0, split),
            key: key,
            layout: key.slice(split + 1, key.length),
            title: `Keyboard: ${key[0]} Layout: ${key[1]}`,
            url: `https://github.com/qmk/qmk_firmware/tree/master/keyboards/${
              key[0]
            }/keymaps/default`,
          };
          if (value) {
            acc.good[key.key] = key;
          } else {
            acc.bad[key.key] = key;
          }
          return acc;
        },
        {good: {}, bad: {}}
      );
      obj.goodlist = keys(obj.good);
      obj.badlist = keys(obj.bad);
      obj.goodlist = obj.goodlist.sort();
      obj.badlist = obj.badlist.sort();
      this.sortedKeyboards = obj;
    },
  },
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
.build-status {
  display: grid;
  grid-template: 1fr / 19% 19% 19% 19% 19%;
}
.keyboard-status {
  margin: 5px;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 8px;
}
.keyboard-passed {
  background: #2e8b57;
  color: #eee;
}
.keyboard-failed {
  background: #b22222;
  color: #eee;
}
.keyboard-passed > a {
  color: #eee;
}
.keyboard-failed > a {
  color: #eee;
}
</style>
