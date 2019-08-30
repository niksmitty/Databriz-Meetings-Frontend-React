import { FETCH_PROJECTS } from "./actionTypes";

const initialState = {
    projects: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        default:
            return state;
    }
}