import React, { PureComponent } from 'react';

import './PageHeader.css';

export default class PageHeader extends PureComponent {
    render() {
        return (
            <header className="header">{this.props.text}</header>
        )
    }
}