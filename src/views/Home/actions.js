export const fetchData = () => async (dispatch) => {
  return fetch('/analytics')
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: 'SET_ANALYTICS_DATA',
        payload: data
      })
    )
}
