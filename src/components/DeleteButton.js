import React from 'react';
import { Label, Row } from '@8base/boost';
import { PropTypes } from 'prop-types';
import plusCircleIcon from '../images/icons/empty-circle.svg';

const DeleteButton = ({ text, onClick }) => {
  return (
    <Row>
      <img className="plus-circle-icon" src={plusCircleIcon} alt="plus-circle-icon" />
      <Label
        kind="secondary"
        style={{ marginTop: 13, cursor: 'pointer' }}
        text={text}
        onClick={onClick}
      />
    </Row>
  );
};

DeleteButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
