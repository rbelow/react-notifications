import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  hideModal() {
    const modal = document.getElementById('SpecialModal');
    modal.style.display = 'none';
  }

  render() {
    return (
      <div id="SpecialModal" className="Modal">
        <div className="Modal-close" onClick={this.hideModal}></div>
        <div className="Modal-content">
          <span className="Close" onClick={this.hideModal}>&times;</span>
          <p>A very interesting message in a large nice modal</p>
        </div>
      </div>
    );
  }
}

export default Modal;
