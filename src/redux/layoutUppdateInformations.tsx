const initialState = {
    update:false
}

interface reduxType {
    type:any,
    payload:{
        update:boolean
    }
}

export default (state = initialState, { type, payload }:any) => {
  switch (type) {

  case 'updateLayoutInformations':
    return { ...state, ...payload }

  default:
    return state
  }
}

