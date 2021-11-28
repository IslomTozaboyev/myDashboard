import TableData from "../../data/TableData"
import { dispatch } from "../store";
import * as T from "../types";
import TableData2 from "../../data/TableData2";
export const setTable = () => {
    try {
        setLoading(true)
        const action = { type: T.SET_TABLE, payload: TableData };
        setLoading(false)
        dispatch(action);
    }
    catch (error) {
        setError()
    }
}
export const setTable2 = () => {
    try {
        setLoading(true)
        const action = { type: T.SET_TABLE2, payload: TableData2 };
        setLoading(false)
        dispatch(action);
    }
    catch (error) {
        setError()
    }
}

const setLoading =() => {
    dispatch({type: T.SET_LOADING})
}
const setError =() => {
    dispatch({type: T.SET_LOADING})
}
