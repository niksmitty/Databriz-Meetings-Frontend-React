import {
    FETCH_WORKITEMS_DETAIL,
    FETCH_WORKITEMS_SUCCESS,
    FETCH_WORKITEMS_PENDING,
    FETCH_WORKITEMS_FAILURE
} from "./actionTypes";

export const initialState = {
    workItems: [],
    workItemsInfo: {},
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WORKITEMS_DETAIL:
            return {
                ...state,
                workItems: action.payload
            };
        case FETCH_WORKITEMS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_WORKITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                workItemsInfo: action.payload
            };
        case FETCH_WORKITEMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}