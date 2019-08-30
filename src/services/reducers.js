import { combineReducers } from "redux";
import projectsReducer from './projects/reducer';
import workItemsReducer from './workItems/reducer';

export default combineReducers({
    projects: projectsReducer,
    workItems: workItemsReducer
});