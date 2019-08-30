import { FETCH_PROJECTS } from "./actionTypes";
import axios from 'axios';

import { meetingsAPI } from "../utils";

export const fetchProjects = () => dispatch => {
    return axios
        .get(`${meetingsAPI}/v1/azure/projects/list`)
        .then(res => {
            let projects = res.data;

            return dispatch({
                type: FETCH_PROJECTS,
                payload: projects
            });
        })
        .catch(err => {
            console.log('Couldn\'t fetch projects');
        })
};