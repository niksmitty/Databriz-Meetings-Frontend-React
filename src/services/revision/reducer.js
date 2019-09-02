import { MAKE_REVISION, RESET_SHOULD_UPDATE } from "./actionTypes";

export const initialState = {
    revision: {
        should_update: false,
        revision: 0
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MAKE_REVISION:
            return {
                ...state,
                revision: action.payload
            };
        case RESET_SHOULD_UPDATE:
            return {
                ...state,
                revision: {
                    ...state.revision,
                    should_update: false
                }
            };
        default:
            return state;
    }
}