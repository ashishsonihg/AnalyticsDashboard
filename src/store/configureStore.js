// import { applyMiddleware, createStore } from 'redux'
// import rootReducer from 'reducers'
// import { thunk } from 'redux-thunk'

// export default function configureStore (initialState = {}, extraParams) {
//   // Compose final middleware and use devtools in debug environment
//   let enhancer = applyMiddleware(thunk.withExtraArgument(extraParams))
//   const __SERVER__ = false
//   if (!__SERVER__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
//     enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       trace: true
//     })(enhancer)
//   }

//   // Create final store and subscribe router in debug env ie. for devtools
//   const store = createStore(rootReducer, initialState, enhancer)

//   if (!__SERVER__ && module.hot) {
//     module.hot.accept('reducers', () => {
//       const nextRootReducer = require('reducers/index').default

//       store.replaceReducer(nextRootReducer)
//     })
//   }
//   return store
// }
