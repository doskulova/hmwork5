import {types} from "../types";



const initialState ={
    message:"",
    variant:""
}

export default  function alertReducer(state=initialState, action) {
    switch (action.type) {
        case types.ALERT_ON:
            return{...state, message: action.payload.message, variant: action.payload.variant}
        case types.ALERT_OFF:
            return {...state, message:"", variant:""}
        default: return state
    }
}