import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchWorkItems } from '../../services/workItems/actions';
import { makeRevision, resetShouldUpdate } from "../../services/revision/actions";

import PageHeader from "../pageHeader/PageHeader";
import WorkItemRow from "../workItemRow/WorkItemRow";

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
        const { workItemsInfo, revision, fetchWorkItems, resetShouldUpdate } = this.props;

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
                <div>{workItemRows}</div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    workItems: state.workItems.workItems,
    workItemsInfo: state.workItems.workItemsInfo,
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