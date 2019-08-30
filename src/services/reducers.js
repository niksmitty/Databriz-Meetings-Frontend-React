import { combineReducers } from "redux";
import projectsReducer, { initialState as projectsInitialState } from './projects/reducer';
import workItemsReducer, { initialState as workItemsInitialState } from './workItems/reducer';
import revisionReducer, { initialState as revisionInitialState } from "./revision/reducer";

export const initialStates = {
    projects: projectsInitialState,
    workItems: workItemsInitialState,
    revision: revisionInitialState
};

export default combineReducers({
    projects: projectsReducer,
    workItems: workItemsReducer,
    revision: revisionReducer
});