import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const dispatch = store.dispatch;
export { dispatch };

export default store;