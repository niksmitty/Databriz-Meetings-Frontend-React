import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchWorkItems } from '../../services/workItems/actions';
import { makeRevision, resetShouldUpdate } from "../../services/revision/actions";

import PageHeader from "../pageHeader/PageHeader";
import WorkItemRow from "../workItemRow/WorkItemRow";

import Loader from 'react-loader-spinner';

class WorkItemsPage extends Component {

    componentDidMount() {
        const { makeRevision } = this.props;

        this.timer = setInterval(() => {
            const { revision } = this.props;
            makeRevision(revision.revision)
        }, 3000);
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

        let workItemRows = [];
        if (workItemsInfo.hasOwnProperty("user_work_items")) {
            let workItems = workItemsInfo["user_work_items"];
            workItemRows = workItems.map(workItem => {
                return (
                    <WorkItemRow key={workItem.id} title={workItem.title} />
                )
            });
        }

        return (
            <div>
                <PageHeader text="Work Items" />
                {error && <span>{error.message}</span>}
                {isLoading ?
                    <Loader type="MutatingDots"
                            color="#00BFFF"
                            height={80}
                            width={80} /> :
                    <div>{workItemRows}</div>}
            </div>
        )
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