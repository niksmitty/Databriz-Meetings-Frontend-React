import { FETCH_WORKITEMS } from "./actionTypes";

const initialState = {
    workItems: []
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