import React from "react";
import PropTypes from 'prop-types';

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>Zamknij</span>
        {props.content}
      </div>
    </div>
  );
};

Popup.propTypes = {
  content: PropTypes.object.isRequired,
  handleClose: PropTypes.object.isRequired,
};

export default Popup;