import React, { Component } from 'react';

import './WorkCard.scss';

class WorkCard extends Component {

    render() {
        const { userInfo } = this.props;

        if (!userInfo) return null;

        return (
            <div className="card">
                <div className="top-background" />
                <div className="avatar" style={{backgroundImage: `url(${userInfo.user_avatar_url})`}} />
                <div className="info-box">
                    <div className="info">
                        <h1>{userInfo.user_name}</h1>
                        <h2>{userInfo.user_email}</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default WorkCard;