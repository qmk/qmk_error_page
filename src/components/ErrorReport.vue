<template>
  <div>
    <h1>QMK API Keyboard Status</h1>
    <input
      v-model="filter"
      class="keyboard-filter"
      placeholder="filter keyboards"
    />
    <div v-show="loading" class="loading">
      <font-awesome-icon icon="atom" spin size="6x" fixed-width />
      <h2>Loading Data</h2>
    </div>
    <div v-if="!loading">
      <h5>Loaded in {{ (loadtime / 1000).toFixed(2) }} seconds</h5>
      <BuildList
        :list="failingKeyboards"
        :filter="filter"
        @show-error-pane="showErrors"
      >
        Builds Failing
      </BuildList>
      <BuildList
        :list="passingKeyboards"
        :filter="filter"
        @show-error-pane="showErrors"
      >
        Builds Passing
      </BuildList>
      <ErrorPane
        v-show="showErrorPane"
        :error-log="errorLog"
        @backdrop-clicked="hideErrors"
      />
    </div>
  </div>
</template>

<script>
import BuildList from '@/components/BuildList';
import ErrorPane from '@/components/ErrorPane';

import axios from 'axios';
import reduce from 'lodash/reduce';
import keys from 'lodash/keys';

export default {
  name: 'ErrorReport',
  components: { BuildList, ErrorPane },
  data: () => {
    return {
      loading: true,
      loadTime: 0,
      filter: '',
      passingKeyboards: [],
      failingKeyboards: [],
      buildLog: {},
      errorLog: '',
      showErrorPane: false,
    };
  },
  mounted() {
    const start = performance.now();
    axios
      .get('https://api.qmk.fm/v1/keyboards/build_log')
      .then((res) => {
        if (res.status === 200) {
          this.buildLog = res.data;
          this.binKeyboards();
        }
      })
      .then(() => {
        this.loading = false;
        this.loadTime = performance.now() - start;
      });
  },
  methods: {
    showErrors(key) {
      this.errorLog = this.buildLog[key].message;
      this.showErrorPane = true;
    },
    hideErrors() {
      this.showErrorPane = false;
    },
    compareKeyboardNames(k1, k2) {
      if (k1.key < k2.key) {
        return -1;
      } else if (k1.key > k2.key) {
        return 1;
      } else {
        return 0;
      }
    },
    binKeyboards() {
      let obj = reduce(
        this.buildLog,
        (acc, value, key) => {
          let statusItem = {
            passed: value.works,
            key: key,
            lastTested: new Date(value.last_tested * 1000),
          };
          if (value.works) {
            acc.good.push(statusItem);
          } else {
            acc.bad.push(statusItem);
          }
          return acc;
        },
        { good: [], bad: [] }
      );
      obj.good.sort(this.compareKeyboardNames);
      obj.bad.sort(this.compareKeyboardNames);
      this.passingKeyboards = obj.good;
      this.failingKeyboards = obj.bad;
    },
  },
};
</script>

<style scoped>
.keyboard-filter {
  padding: 10px;
  width: 20%;
  font-size: 1.1rem;
}

@media (max-width: 640px) {
  .keyboard-filter {
    width: 80%;
  }
}
.loading {
  margin-top: 1em;
}
</style>
