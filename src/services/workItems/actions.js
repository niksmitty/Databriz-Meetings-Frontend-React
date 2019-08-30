import { FETCH_WORKITEMS } from "./actionTypes";
import axios from 'axios';

import { meetingsAPI } from "../utils";

export const fetchWorkItems = (userEmail, projectId, teamId, iteration) => dispatch => {
    return axios
        .get(`${meetingsAPI}/v1/azure/members/${userEmail}/workItems/list`, {
            params: {
                projectId: projectId,
                teamId: teamId,
                iteration: iteration
            }
        })
        .then(res => {
            let workItems = res.data;

            return dispatch({
                type: FETCH_WORKITEMS,
                payload: workItems
            });
        })
        .catch(err => {
            console.log('Couldn\'t fetch workItems');
        })
};