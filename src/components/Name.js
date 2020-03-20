import React from 'react';
import PropTypes from "prop-types";

function Name ({ size, className = "" }) {
  return (
    <span
      className={`font-bold text-${size} tracking-normal text-lightWhite ${className}`}
    >
      <span className="text-purple">Santiago</span>
      <span> Garcia</span>
    </span>
  )
}

Name.propTypes = {
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Name;