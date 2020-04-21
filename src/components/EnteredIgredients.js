import React from 'react'
import PropTypes from 'prop-types';

const EnteredIgredients = ({ enteredIngredients, className }) => {
    return (
        <>
            <div className={className} >
                <p className='center-align'>Ingredients needed for this recepie:</p>
                {!!enteredIngredients.length && <div style={{ backgroundColor: "#eee", padding: 5 }}>
                    <ol>
                        {enteredIngredients.map((item, index) => {
                            return (
                                <li key={index}>{item.name} - {item.quantity} {item.quantity && item.unit}</li>)
                        })}
                    </ol>
                </div>}
            </div>
        </>
    )
}

export default EnteredIgredients

EnteredIgredients.propTypes = {
    enteredIngredients: PropTypes.array,
    className: PropTypes.string
};


