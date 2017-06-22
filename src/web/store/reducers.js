import { combineReducers } from 'redux'

import portal from './modules/portal'
import app from './modules/app'
import logs from './modules/logs'

const rootReducer = asyncReducers => combineReducers({
  app,
  portal,
  logs,
  ...asyncReducers,
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return
  /* eslint no-param-reassign: off */
  store.asyncReducers[key] = reducer
  store.replaceReducer(rootReducer(store.asyncReducers))
}

export default rootReducer
