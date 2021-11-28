import { dispatch } from "../store"
import { TOGGLE_APP } from "../types"

export const AppAction=()=>{
const action={type:TOGGLE_APP} 
dispatch(action)
}