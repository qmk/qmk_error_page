<template>
  <h1>QMK API Keyboard Status</h1>
  <div v-if="loading" id="loading">
    <ProgressBar :progress="loadProgress" />
  </div>
  <div v-else>
    <input v-model="filter" id="filter" placeholder="filter keyboards" />
    <h5>Loaded in {{ loadTime }} seconds</h5>
    <BuildList :list="failingKeyboards" :filter="filter" @show-error-pane="showErrors">
      Builds Failing
    </BuildList>
    <BuildList :list="warningKeyboards" :filter="filter" @show-error-pane="showErrors">
      Builds Warning
    </BuildList>
    <BuildList :list="passingKeyboards" :filter="filter" @show-error-pane="showErrors">
      Builds Passing
    </BuildList>
    <ErrorPane
      :visible="showErrorPane"
      :error-log="errorLog"
      :loading="errorLogLoading"
      @backdrop-clicked="hideErrors"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import axios from 'axios'
import reduce from 'lodash/reduce'

import BuildList from '@/components/BuildList.vue'
import ErrorPane from '@/components/ErrorPane.vue'
import ProgressBar from '@/components/ProgressBar.vue'

let buildLog = {}

const loading = ref(true)
const loadTime = ref('')
const loadProgress = ref(0)
const filter = ref('')
const passingKeyboards = ref([])
const warningKeyboards = ref([])
const failingKeyboards = ref([])
const errorLog = ref('')
const errorLogLoading = ref(false)
const showErrorPane = ref(false)

onMounted(() => {
  loadBuildSummary()
})

async function loadBuildSummary() {
  const start = performance.now()

  try {
    const { status, data } = await axios.get(
      `${import.meta.env.VITE_QMK_API_BASEURL}/v1/keyboards/build_summary`,
      {
        onDownloadProgress: (e) => {
          loadProgress.value = Math.floor((e.loaded / e.total) * 100)
        }
      }
    )

    if (status === 200) {
      buildLog = data
      binKeyboards()
    }
  } catch (e) {
    console.log(e.message)
  }

  loading.value = false
  loadTime.value = ((performance.now() - start) / 1000).toFixed(2)
}

async function loadBuildLog(keyboard) {
  errorLogLoading.value = true

  try {
    const { status, statusText, data } = await axios.get(
      `${import.meta.env.VITE_QMK_API_BASEURL}/v1/keyboards/${keyboard}/build_log`
    )

    if (status === 200) {
      buildLog[keyboard].message = data.message
      errorLog.value = data.message
    } else {
      buildLog[keyboard].message = `ERROR ${status}: ${statusText}`
    }
  } catch (e) {
    buildLog[keyboard].message = `ERROR: ${e.message}`
  }

  errorLogLoading.value = false
  errorLog.value = buildLog[keyboard].message
}

function showErrors(key) {
  if (!('message' in buildLog[key])) {
    loadBuildLog(key)
  } else {
    errorLog.value = buildLog[key].message
  }

  showErrorPane.value = true
}

function hideErrors() {
  showErrorPane.value = false
}

function compareKeyboardNames(k1, k2) {
  return k1.key < k2.key ? -1 : k1.key > k2.key ? 1 : 0
}

function binKeyboards() {
  let obj = reduce(
    buildLog,
    (acc, value, key) => {
      let item = {
        passed: value.works,
        warnings: value.warnings,
        key: key,
        lastTested: new Date(value.last_tested * 1000)
      }
      if (item.passed) {
        if (item.warnings) {
          acc.warn.push(item)
        } else {
          acc.good.push(item)
        }
      } else {
        acc.bad.push(item)
      }
      return acc
    },
    { good: [], warn: [], bad: [] }
  )
  obj.good.sort(compareKeyboardNames)
  obj.warn.sort(compareKeyboardNames)
  obj.bad.sort(compareKeyboardNames)
  passingKeyboards.value = obj.good
  warningKeyboards.value = obj.warn
  failingKeyboards.value = obj.bad
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

#filter {
  padding: 12px;
  width: 20%;
  font-size: 1.1rem;
  color: #2c3e50;
  background: #eee;
  border: none;
  border-radius: 8px;
}
#filter:hover {
  background: #ddd;
}
#filter:focus {
  outline: none;
  background: #d0d0d0;
}

#loading {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

@media (max-width: 640px) {
  #filter {
    width: 80%;
  }
}

@media (prefers-color-scheme: dark) {
  body {
    background: #202020;
    color: #ced9e4;
  }

  #filter {
    background: #1c1c1c;
    color: #ced9e4;
  }
  #filter:hover {
    background: #2c2c2c;
  }
  #filter:focus {
    background: #303030;
  }
}
</style>
