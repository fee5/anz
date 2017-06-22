// Constants
// --------------------------------------------------
export const GET_LOGS = 'GET_LOGS'
export const POST_LOGS = 'POST_LOGS'

// Actions
// --------------------------------------------------
export const getLogs = query => ({
  type: GET_LOGS,
  http: { method: 'get', url: '/api/getLogs', params: query },
})

// Reducer
// --------------------------------------------------
export default (state = [], action) => {
  switch (action.type) {
    case `${GET_LOGS}_SUCCESS`:
      return action.payload
    case `${POST_LOGS}_SUCCESS`:
      return action.payload
    default:
      return state
  }
}
