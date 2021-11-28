import * as T from "../types";

const initialState = {
    tableData: [],
    tableData2: [],
    loading: true,
    error: false,
}

const TableReducer = (state = initialState, action) => {
    switch (action.type) {
        case T.SET_TABLE: return { ...state, tableData: action.payload, loading: false };
        case T.SET_TABLE2: return { ...state, tableData2: action.payload, loading: false }
        case T.SET_LOADING: return { ...state, loading: true };
        case T.SET_ERROR: return { ...state, error: true, loading: false };

        default: return state;
    }
}

export default TableReducer;