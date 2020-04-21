import React, { useState, useEffect } from 'react'
import Ingredients from './Ingredients'
import InputField from './InputField'
import { useDispatch } from "react-redux";
import { addRecepie } from "../redux/actions";
import { handlePreventNonNumericOnKeyPress } from '../helpers'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const errorToast = {
    autoClose: 10000,
    draggable: false,
    position: "bottom-center"
}

const RecepieEntry = ({ setModalAdd }) => {
    const [validationMessage, setValidationMessage] = useState(false)
    const [newRecepie, setNewRecepie] = useState({});
    const [enteredIngredients, setEnteredIngredients] = useState([])
    const dispatch = useDispatch();

    const validateMinutes = (e) => {
        //give error message if user enters value for minutes greater then 59
        if (+e.target.value > 59) {
            e.target.value = '00'
            return setValidationMessage(true)
        }
        return setValidationMessage(false)
    }

    useEffect(() => {
        setNewRecepie({ ...newRecepie, ingredients: enteredIngredients })
    }, [enteredIngredients])

    const addNewRecepie = (e) => {
        //creating the state of the new entries for the new recepie
        //if user enteres one of the inputs for hours or minutes, put the values in own properties of the object which is value of the property time
        if (e.target.name === "hours" || e.target.name === "minutes") {
            let time = { ...newRecepie.time, [e.target.name]: e.target.value }
            return setNewRecepie({ ...newRecepie, time })
        }
        setNewRecepie({ ...newRecepie, [e.target.name]: e.target.value })
    }

    const handleSaveRecepie = () => {
        let flag = true
        //error message for every required field
        if (!newRecepie.name) {
            toast.error("Name of Recepie is a required field", errorToast);
            flag = false
        }
        if (!newRecepie.time || (newRecepie.time && !(newRecepie.time.hours || newRecepie.time.minutes))) {
            toast.error("You must enter Preparation Time (Hours or/and Minutes)", errorToast);
            flag = false
        }
        if (!newRecepie.hasOwnProperty('ingredients') || !newRecepie.ingredients.length) {
            toast.error("You must enter at least one Ingredient", errorToast);
            flag = false
        }
        if (!newRecepie.instructions) {
            toast.error("Preparation Instructions is a required field", errorToast);
            flag = false
        }
        //if none of the required fields is empty new recepie is added
        if (flag) {
            dispatch(addRecepie(newRecepie));
            setModalAdd(false)
        }
    }

    return (
        <div>
            <div className="row" style={{ paddingTop: 20 }}>
                <h6 className="left-align instruction-background">Please enter your recepie name and source:</h6>
                <InputField
                    name="name"
                    labelName="Recepie Name"
                    onBlur={addNewRecepie}
                />
                <InputField
                    name="src"
                    labelName="Recepie Source"
                    onBlur={addNewRecepie}
                />
            </div>
            <h6 className="left-align instruction-background">Please select the ingredients and type the quantity you need:</h6>
            <Ingredients enteredIngredients={enteredIngredients} setEnteredIngredients={setEnteredIngredients} />
            <h6 className="left-align instruction-background" style={{ marginBottom: 20 }}>Please enter time needed for preparation:</h6>
            <div className="row">
                <InputField
                    name="hours"
                    labelName="Hours"
                    maxLength="2"
                    onBlur={addNewRecepie}
                    onKeyPress={handlePreventNonNumericOnKeyPress}
                />
                <InputField
                    name="minutes"
                    labelName="Minutes"
                    maxLength="2"
                    onBlur={(e) => { addNewRecepie(e); validateMinutes(e) }}
                    onKeyPress={handlePreventNonNumericOnKeyPress}
                />
                {validationMessage && <span className="hotpink">Please enter valid value for munutes!</span>}
            </div>
            <h6 className="left-align instruction-background" style={{ marginBottom: 20 }}>Please enter your instructions for this recepie:</h6>
            <div className="input-field col s12">
                <textarea name="instructions" id="textarea1" className="materialize-textarea" onBlur={addNewRecepie}></textarea>
                <label htmlFor="textarea1">Instructions</label>
            </div>
            <div>
                <button className="waves-light btn m10" onClick={() => setModalAdd(false)}>Cancel</button>
                <button className="btn red lighten-2 m10" onClick={handleSaveRecepie}>Save Recepie</button>
            </div>
        </div>
    )
}

export default RecepieEntry

RecepieEntry.propTypes = {
    setModalAdd: PropTypes.func
};