import React from 'react';
import './Notifications.scss';

const Notifications = ({ notifications }) => {
    return (
        <div className="widget notifications">
            <div className="notifications__top-line">
                <h2 className="notifications__type">Notifications</h2>
                <div className="notifications__buttons">
                    {/* <button className="yellow_button due-tasks__settings"></button> */}
                    <button className="yellow_button notifications__button">All notifications</button>
                </div>
            </div>
            {/* <h3>Notifications</h3> */}
            <div className="notifications__table">
                <div className="notifications__header">
                    <span className="notifications__header-item">Notification</span>
                    <span className="notifications__header-item">Date</span>
                    <span className="notifications__header-item">Link</span>
                </div>
                <div className="notifications__body">
                    {notifications.slice(0, 3).map((notification, index) => (
                        <div key={index} className="notifications__row">
                            <span className="notifications__item description">{notification.text}</span>
                            <span className="notifications__item due">{new Date(notification.date).toLocaleDateString()}</span>
                            {/* <a href={notification.link} className="notifications__item link">&#8635;</a> */}
                            <span className="notifications__item link">
                                <a className="link-button">&#8635;</a>
                            </span>
                        </div>
                    ))}
                </div>
                {/* <button>All notifications</button> */}
            </div>
        </div>
    );
};

export default Notifications;
