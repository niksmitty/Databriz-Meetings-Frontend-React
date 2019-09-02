import { FETCH_WORKITEMS_DETAIL, FETCH_WORKITEMS } from "./actionTypes";
import axios from 'axios';

import { meetingsAPI } from "../utils";

export const fetchWorkItemsDetail = (userEmail, projectId, teamId, iteration) => dispatch => {
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
                type: FETCH_WORKITEMS_DETAIL,
                payload: workItems
            });
        })
        .catch(err => {
            console.log('Couldn\'t fetch workItems');
        })
};

export const fetchWorkItems = () => dispatch => {
    return axios
        .get(`${meetingsAPI}/v1/web/data/get`)
        .then(res => {
            let workItemsInfo = res.data;

            return dispatch({
                type: FETCH_WORKITEMS,
                payload: workItemsInfo
            });
        })
        .catch(err => {
            console.log('Couldn\'t fetch workItems');
        })
};