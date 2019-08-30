import React, { PureComponent } from 'react';

import "./WorkItemRow.css";

export default class WorkItemRow extends PureComponent {
    render() {
        return (
            <div className="work-item-row">
                <span className="title">{this.props.title}</span>
            </div>
        )
    }
}