import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Button from './Button.js';
import NotificationContainer from './NotificationContainer.js';
import Notification from './Notification.js';
import Modal from './Modal.js';

class App extends Component {
  constructor() {
    super();
    this.toggleMode = this.toggleMode.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.removeNotification = this.removeNotification.bind(this);
    this.state = {
      notificationArr: [],
      key: 0,
      modal: false
    };
  }

  toggleMode() {
    if (!this.state.modal) {
      this.removeAllNotifications();
    }
    this.setState(prevState => ({
      modal: prevState.modal = !prevState.modal
    }));
  }

  removeAllNotifications() {
    this.setState(prevState => ({
      notificationArr: prevState.notificationArr = []
    }));
  }

  showModal() {
    const modal = document.getElementById('SpecialModal');
    modal.style.display = 'block';
  }

  addNotification() {
    const notification =
      <Notification
        key={this.state.key}
        /*
          Define `props` values of your notification here.
          Choose the `type` prop between:
            - Alert (yellow)
            - Warning (red)

          If you don't set a `text`, `type` or `time` value, the default
          values will be active.
          The default value for `type` is: `Info` (blue).
          The default value for `text` is: `Lorem ipsum`.
          The default value for `time` is: `3000` (3s).
        */
        type="Warning"
        text="This works so smoothly!"
        time=""
      />;

    // state updates may be asynchronous, so use the second form of `setState()`
    this.setState(prevState => ({
      // http://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
      notificationArr: prevState.notificationArr.concat(notification),
      key: prevState.key + 1
    }));
    this.timeoutNotification(notification.props.time);
  }

  timeoutNotification(time) {
    const delay = time ? time : 3000;
    setTimeout(this.removeNotification, delay);
  }

  removeNotification() {
    const arr = this.state.notificationArr;
    const arrLength = arr.length;
    // Use `slice()` because it doesn't mutate the original array,
    // it's good for React state handling and functional programming.
    const newArr = arrLength ? arr.slice(0, arrLength - 1) : [];

    this.setState(prevState => ({
      notificationArr: prevState.notificationArr = newArr
    }));
  }

  render() {
    const notifications = this.state.notificationArr;
    const isModal = this.state.modal;

    return (
      <div className="App">
        <Header />
        {isModal ? (
          <div>
            <Button class="Button-alert" text="Notification Mode" onClick={this.toggleMode} />
            <Button text="React Modal" onClick={this.showModal} />
            <Modal />
          </div>
        ) : (
          <div>
            <Button class="Button-alert" text="Modal Mode" onClick={this.toggleMode} />
            <Button text="React Notification" onClick={this.addNotification} />
            <NotificationContainer
              /*
                Define the `position` of the notification here.
                Choose between:
                  - Bottom-right
                  - Bottom-left
                  - Top-left

                If you don't set a value, the default value: `Top-right`
                will be active.
              */
              position="Bottom-right">
              {notifications}
            </NotificationContainer>
          </div>
        )}
      </div>
    );
  }
}

export default App;
