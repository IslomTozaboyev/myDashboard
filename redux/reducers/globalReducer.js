import { TOGGLE_APP, TOGGLE_MASSAGE, TOGGLE_SETTINGS } from "../types";

const initialState = {
    isApp: false,
    isMassage: false,
    isSettings: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SETTINGS: return { ...state, isSettings: !state.isSettings }
        case TOGGLE_MASSAGE: return { ...state, isMassage: !state.isMassage }
        case TOGGLE_APP: return { ...state, isApp: !state.isApp }

        default: return state;
    }
}

export default reducer;