import React from 'react';
import PropTypes from 'prop-types';
import './LabeledInput.css';

const LabeledInput = ({ name, label, value, onChange, error }) => (
  <div className="label-input">
    <label htmlFor={name} className="label-input-label">
      {label}
      <input
        name={name}
        id={name}
        type="text"
        value={value}
        onChange={onChange}
        className="label-input-input"
      />
    </label>
    <p className="label-input-error">{error}</p>
  </div>
);

LabeledInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

LabeledInput.defaultProps = {
  error: ''
};

export default LabeledInput;
