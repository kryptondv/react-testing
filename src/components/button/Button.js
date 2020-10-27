import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ buttonText, handler }) => {
  return (
    <button onClick={handler} data-test="buttonComponent">
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  handler: PropTypes.func
}

export default Button;
