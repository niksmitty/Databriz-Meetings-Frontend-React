import { FETCH_WORKITEMS } from "./actionTypes";

export const initialState = {
    workItems: [],
    workItemsInfo: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_WORKITEMS:
            return {
                ...state,
                workItems: action.payload
            };
        default:
            return state;
    }
}