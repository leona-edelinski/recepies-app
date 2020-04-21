import React from 'react'
import PropTypes from 'prop-types';

const InputField = ({ name, onBlur, labelName, ...rest }) => {
    return (
        <div className="input-field col s6">
            <input type="text" name={name} id={name} onBlur={onBlur} maxLength={rest.maxLength} onKeyPress={rest.onKeyPress} />
            <label htmlFor={name}>{labelName}</label>
        </div>
    )
}

export default InputField

InputField.propTypes = {
    name: PropTypes.string,
    labelName: PropTypes.string,
    onBlur: PropTypes.func,
    maxLength: PropTypes.string,
    onKeyPress: PropTypes.func
};