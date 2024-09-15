const defaultState = {}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ANALYTICS_DATA':
      return {
        ...state,
        analytics: action.payload
      }
  }
}

export default reducer
