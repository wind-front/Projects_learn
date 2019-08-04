import { constants } from './index';
import { fromJS } from 'immutable'

// 引入immutable库保证state不会被改变
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constants.Search_focues ) {
    // return { focused: true }
    return state.set('focused', true)
  }
  if (action.type === constants.Search_blur ) {
    // return { focused: false }
    return state.set('focused', false)
  }
  return state
}