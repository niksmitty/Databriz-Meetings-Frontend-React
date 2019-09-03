import React, {Component} from 'react'

import {connect} from 'react-redux';
import {fetchWorkItems} from '../../services/workItems/actions';
import {makeRevision, resetShouldUpdate} from "../../services/revision/actions";

import WorkItemRow from "../workItemRow/WorkItemRow";
import WorkCard from "../workCard/WorkCard";

import Loader from 'react-loader-spinner';

class WorkItemsPage extends Component {

    componentDidMount() {
        const {makeRevision, revision} = this.props;

        makeRevision(revision.revision);

        this.timer = setInterval(() => {
            const {revision} = this.props;
            makeRevision(revision.revision);
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        const {
            workItemsInfo, isLoading, error, revision,
            fetchWorkItems, resetShouldUpdate
        } = this.props;

        if (revision.should_update) {
            resetShouldUpdate();
            fetchWorkItems();
        }

        let workItemRows = [], userInfo = null;
        if (workItemsInfo.hasOwnProperty("user_work_items")) {
            userInfo = (({
                             user_name,
                             user_email,
                             user_avatar_url
                         }) => ({
                user_name,
                user_email,
                user_avatar_url
            }))(workItemsInfo);
            let workItems = workItemsInfo["user_work_items"];
            workItemRows = workItems.map(workItem => {
                return (
                    <div key={workItem.id} className="col-sm-6 col-md-4">
                        <WorkItemRow key={workItem.id} workItem={workItem}/>
                    </div>
                )
            });
        }

        if (isLoading) {
            return (
                <div style={{
                    position: `fixed`,
                    top: `0px`,
                    bottom: `0px`,
                    left: `0px`,
                    right: `0px`,
                    display: `flex`,
                    alignItems: `center`,
                    overflow: `auto`
                }}>
                    <div style={{margin: `auto`, maxHeight: `100%`}}>
                        <Loader type="MutatingDots"
                                color="#00BFFF"
                                height={100}
                                width={100}/>
                    </div>
                </div>
            )
        } else if (error) {
            return (
                <div>
                    <span>{error.message}</span>
                </div>
            )
        } else {
            return (
                <div>
                    <WorkCard userInfo={userInfo}/>
                    <div className="row mt-3">{workItemRows}</div>
                </div>
            )
        }
    }

}

const mapStateToProps = state => ({
    workItemsInfo: state.workItems.workItemsInfo,
    isLoading: state.workItems.isLoading,
    error: state.workItems.error,
    revision: state.revision.revision
});

const mapDispatchToProps = {
    fetchWorkItems,
    makeRevision,
    resetShouldUpdate
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkItemsPage);