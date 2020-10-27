const { reactive, toRefs } = require('@nuxtjs/composition-api')

const state = reactive({
  hasUserFinishedReading: false,
})

function setUserFinishedReading(hasFinished) {
  state.hasUserFinishedReading = hasFinished
}

const stateAsRef = toRefs(state)

Object.assign(module.exports, {
  state: stateAsRef,
  setUserFinishedReading,
})
