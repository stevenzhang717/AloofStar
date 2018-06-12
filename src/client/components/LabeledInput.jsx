import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function LabeledInput({ name, label, className, type, value, onChange, error }) {
  return (
    <div>
      <TextField
        name={name}
        label={label}
        id={name}
        margin="normal"
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        error={!!error}
      />
      <span style={{ color: 'red', marginLeft: 20, fontWeight: 'bold' }}> {error} </span>
    </div>
  );
}

LabeledInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

LabeledInput.defaultProps = {
  name: '',
  label: '',
  className: '',
  type: '',
  value: '',
  onChange: () => {},
  error: ''
};

export default LabeledInput;
