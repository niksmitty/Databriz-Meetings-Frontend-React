import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchWorkItems } from '../../services/workItems/actions';

import PageHeader from "../pageHeader/PageHeader";
import WorkItemRow from "../workItemRow/WorkItemRow";

class WorkItemsPage extends Component {

    componentDidMount() {
        const {fetchWorkItems} = this.props;
        fetchWorkItems(
            'egin@databriz.ru',
            '11834e88-af42-4f6d-9d12-33acaa466655',
            '17655e69-cfda-491c-9568-5c8a6a647078',
            'Sibur\\Final'
        );
    }

    render() {
        const { workItems } = this.props;

        const workItemRows = workItems.map(workItem => {
            return (
                <WorkItemRow key={workItem.id} title={workItem.title} />
            )
        });

        return (
            <div>
                <PageHeader text="Work Items" />
                <div>{workItemRows}</div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    workItems: state.workItems.workItems
});

const mapDispatchToProps = {
    fetchWorkItems
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkItemsPage);