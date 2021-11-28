import { dispatch } from "../store"
import { TOGGLE_APP, TOGGLE_MASSAGE, TOGGLE_SETTINGS } from "../types"

export const SettingsAction=()=>{
const action={type:TOGGLE_SETTINGS} 
dispatch(action)
}