import { MAKE_REVISION, RESET_SHOULD_UPDATE } from "./actionTypes";
import axios from 'axios';

import { meetingsAPI } from "../utils";

export const makeRevision = (revisionNumber) => dispatch => {
    return axios
        .get(`${meetingsAPI}/v1/web/data/revision/isActual`, {
            params: {
                revision: revisionNumber,
            }
        })
        .then(res => {
            let revision = res.data;

            return dispatch({
                type: MAKE_REVISION,
                payload: revision
            });
        })
        .catch(err => {
            console.log('Couldn\'t make revision');
        })
};

export const resetShouldUpdate = () => dispatch => {
    return dispatch({
        type: RESET_SHOULD_UPDATE
    });
};