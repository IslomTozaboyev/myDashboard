import { combineReducers } from "redux";
import TableReducer from "./TableReducer";
import GlobalReducer from "./globalReducer";

const reducer = combineReducers({
    TableReducer,
    GlobalReducer
});

export default reducer;