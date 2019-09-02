import { FETCH_WORKITEMS_DETAIL, FETCH_WORKITEMS } from "./actionTypes";

export const initialState = {
    workItems: [],
    workItemsInfo: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WORKITEMS_DETAIL:
            return {
                ...state,
                workItems: action.payload
            };
        case FETCH_WORKITEMS:
            return {
                ...state,
                workItemsInfo: action.payload
            };
        default:
            return state;
    }
}