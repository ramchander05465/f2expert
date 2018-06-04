import * as actionType from '../actions'

const INIT_STATE = {info:''} 

const reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case actionType.NAV_INFO:
      return {
        ...state,
        info:action.info
      }
    default:
      return state
  }
}

export default reducer