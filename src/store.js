import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer, { defaultState } from './root-reducer'
import { thunk } from 'redux-thunk'

// This allows us to use Redux dev tools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const middleware = [thunk]

// With server rendering, we can grab the preloaded state.
const preloadedState = window.__PRELOADED_STATE__ || defaultState // eslint-disable-line

export const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
