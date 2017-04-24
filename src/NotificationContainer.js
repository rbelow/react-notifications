import React, { Component } from 'react';
import './NotificationContainer.css';

class NotificationContainer extends Component {
  // componentDidUpdate() {
  //   console.log('container update');
  // }

  render() {
    const position = this.props.position ? ' ' + this.props.position : '';

    return (
      <div className={"Notification-container" + position}>
        {this.props.children}
      </div>
    );
  }
}

export default NotificationContainer;
