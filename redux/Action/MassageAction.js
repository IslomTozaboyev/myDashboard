import { dispatch } from "../store"
import { TOGGLE_APP, TOGGLE_MASSAGE } from "../types"

export const MassageAction=()=>{
const action={type:TOGGLE_MASSAGE} 
dispatch(action)
}