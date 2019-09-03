import React, { PureComponent } from 'react';

import "./WorkItemRow.css";

export default class WorkItemRow extends PureComponent {
    render() {
        const { workItem } = this.props;

        return (
            <div className="work-item-row">
                <div className="header-title">{workItem.title}</div>
                <ul className="workitem-details">
                    <li className="workitem-details-item state">
                        <span className="value">{workItem.state}</span>
                        <span className="title">State</span>
                    </li>
                    <li className="workitem-details-item estimate">
                        <span className="value">{workItem.original_estimate}</span>
                        <span className="title">Original</span>
                    </li>
                    <li className="workitem-details-item time">
                        <span className="value">{workItem.completed_time}</span>
                        <span className="title">Complete</span>
                    </li>
                </ul>
            </div>
        )
    }
}