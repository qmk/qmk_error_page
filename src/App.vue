<template>
  <h1>QMK API Keyboard Status</h1>
  <div v-if="loading" class="loading">
    <font-awesome-icon icon="atom" spin size="6x" fixed-width />
    <h2>Loading Data… {{ loadProgress }}%</h2>
  </div>
  <div v-else>
    <input v-model="filter" class="keyboard-filter" placeholder="filter keyboards" />
    <h5>Loaded in {{ (loadTime / 1000).toFixed(2) }} seconds</h5>
    <BuildList :list="failingKeyboards" :filter="filter" @show-error-pane="showErrors">
      Builds Failing
    </BuildList>
    <BuildList :list="passingKeyboards" :filter="filter" @show-error-pane="showErrors">
      Builds Passing
    </BuildList>
    <ErrorPane v-show="showErrorPane" :error-log="errorLog" @backdrop-clicked="hideErrors" />
  </div>
</template>

<script>
import BuildList from '@/components/BuildList.vue'
import ErrorPane from '@/components/ErrorPane.vue'

import axios from 'axios'
import reduce from 'lodash/reduce'

export default {
  name: 'App',
  components: { BuildList, ErrorPane },
  data: () => {
    return {
      loading: true,
      loadTime: 0,
      loadProgress: 0,
      filter: '',
      passingKeyboards: [],
      failingKeyboards: [],
      buildLog: {},
      errorLog: '',
      showErrorPane: false
    }
  },
  mounted() {
    this.downloadBuildLog()
  },
  methods: {
    downloadBuildLog() {
      const start = performance.now()
      axios
        .get('https://api.qmk.fm/v1/keyboards/build_log', {
          onDownloadProgress: (e) => {
            this.loadProgress = Math.floor((e.loaded / e.total) * 100)
          }
        })
        .then((res) => {
          if (res.status === 200) {
            this.buildLog = res.data
            this.binKeyboards()
          }
        })
        .then(() => {
          this.loading = false
          this.loadTime = performance.now() - start
        })
    },
    showErrors(key) {
      this.errorLog = this.buildLog[key].message
      this.showErrorPane = true
    },
    hideErrors() {
      this.showErrorPane = false
    },
    compareKeyboardNames(k1, k2) {
      return k1.key < k2.key ? -1 : k1.key > k2.key ? 1 : 0
    },
    binKeyboards() {
      let obj = reduce(
        this.buildLog,
        (acc, value, key) => {
          let statusItem = {
            passed: value.works,
            key: key,
            lastTested: new Date(value.last_tested * 1000)
          }
          if (value.works) {
            acc.good.push(statusItem)
          } else {
            acc.bad.push(statusItem)
          }
          return acc
        },
        { good: [], bad: [] }
      )
      obj.good.sort(this.compareKeyboardNames)
      obj.bad.sort(this.compareKeyboardNames)
      this.passingKeyboards = obj.good
      this.failingKeyboards = obj.bad
    }
  }
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

.keyboard-filter {
  padding: 12px;
  width: 20%;
  font-size: 1.1rem;
  color: #2c3e50;
  background: #eee;
  border: none;
  border-radius: 8px;
}
.keyboard-filter:hover {
  background: #ddd;
}
.keyboard-filter:focus {
  outline: none;
  background: #d0d0d0;
}

.loading {
  margin-top: 1em;
}

@media (max-width: 640px) {
  .keyboard-filter {
    width: 80%;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: #202020;
    color: #ced9e4;
  }

  .keyboard-filter {
    background: #1c1c1c;
    color: #ced9e4;
  }
  .keyboard-filter:hover {
    background: #2c2c2c;
  }
  .keyboard-filter:focus {
    background: #303030;
  }
}
</style>
