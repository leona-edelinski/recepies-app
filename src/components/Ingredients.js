import React, { useState } from 'react'
import EnteredIgredients from './EnteredIgredients'
import { handlePreventNonNumericOnKeyPress } from '../helpers'
import PropTypes from 'prop-types';

const Ingredients = ({ enteredIngredients, setEnteredIngredients }) => {
    const ingrdients = [
        { name: 'Flour', checked: false, unit: "grams", quantity: "" },
        { name: 'Milk', checked: false, unit: "grams", quantity: "" },
        { name: 'Oil', checked: false, unit: "grams", quantity: "" },
        { name: 'Salt', checked: false, unit: "teaspoons", quantity: "" },
        { name: 'Sugar', checked: false, unit: "teaspoons", quantity: "" },
        { name: 'Eggs', checked: false, unit: "pieces", quantity: "" },
        { name: 'Tomatoes', checked: false, unit: "pieces", quantity: "" },
        { name: 'Peppers', checked: false, unit: "pieces", quantity: "" },
        { name: 'Cheese', checked: false, unit: "grams", quantity: "" },
        { name: 'Potatoes', checked: false, unit: "pieces", quantity: "" },
        { name: 'Meat', checked: false, unit: "grams", quantity: "" }
    ]

    const [ingredients, setIngredients] = useState(ingrdients)

    const handleEnteredIngredients = (newArr) => {
        //filtering checked ingredients to be added in the visible list of choosen engredients for the recepie
        const entered = newArr.filter(item => item.checked)
        setEnteredIngredients(entered)
    }

    const handleChecked = (index, e) => {
        //updating state of ingredients so that checked values(checkboxes) should be visible on the UI
        let newArr = [...ingredients]
        newArr[index] = { ...newArr[index], checked: e.target.checked }
        setIngredients(newArr)
        handleEnteredIngredients(newArr)
    }

    const handleChange = (index, e) => {
        //updating state of ingredients so that entered values(quantity) should be visible on the UI
        let newArr = [...ingredients]
        newArr[index] = { ...newArr[index], quantity: e.target.value }
        setIngredients(newArr)
        handleEnteredIngredients(newArr)
    }

    return (
        <div className='row'>
            <div className='col s6'>
                <p>Available Ingredients:</p>
                {ingredients.map((ingredient, index) => {
                    return (
                        <div key={index} className="flex-center left-align" >
                            <label>
                                <input type="checkbox" checked={ingredient.checked} onChange={(e) => handleChecked(index, e)} />
                                <span style={ingredient.checked ? { color: "#000" } : { color: "#ccc" }}>{ingredient.name}</span>
                            </label>
                            <div className="input-field flex-center" style={{ margin: 0 }}>
                                <input onKeyPress={handlePreventNonNumericOnKeyPress} placeholder={ingredient.checked ? "Enter ingredient quantity" : undefined} value={ingredient.quantity} disabled={!ingredient.checked} onChange={(e) => handleChange(index, e)} style={{ margin: '0 0 0 10px', fontSize: 14 }} /> <span>{ingredient.unit}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <EnteredIgredients className="col s6 left-align" enteredIngredients={enteredIngredients} />
        </div>
    )
}

export default Ingredients

Ingredients.propTypes = {
    enteredIngredients: PropTypes.array,
    setEnteredIngredients: PropTypes.func,
};