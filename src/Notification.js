import React, { Component } from 'react';
import './Notification.css';

class Notification extends Component {
  // componentDidMount() {
  //   console.log('notification mount');
  // }
  //
  // componentWillUnmount() {
  //   console.log('notification unmount');
  // }

  render() {
    const type = this.props.type ? ' ' + this.props.type : '';
    const text = this.props.text ? this.props.text : 'Lorem ipsum';

    return (
      <div className={"Info" + type}>
        <p>{text}</p>
      </div>
    );
  }
}

export default Notification;
