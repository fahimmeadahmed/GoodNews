import { ACTION_TYPES } from "../actions/nList"

const initialState = {
    list: []
}
export const nList = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        case ACTION_TYPES.FETCH_BY_ID:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}
