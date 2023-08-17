import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick, className }) => (
  <button type="button" className={className} onClick={() => onClick(value)}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
