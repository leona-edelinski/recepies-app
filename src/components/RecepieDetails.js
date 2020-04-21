import React from 'react'
import PropTypes from 'prop-types';

const RecepieDetails = ({ recepie, setModalDetails, setModalDelete }) => {
    return (
        <>
            <div className="row">
                <div className="col s6 left-align">
                    <h4 className="light-pink">{recepie.name}</h4>
                    <h6>Source: <a href="#">{recepie.src}</a></h6>
                    <h6>Preparation Time:</h6>
                    <span style={{ backgroundColor: "#26a69a30", padding: 3, }}>
                        {!!+recepie.time.hours && `${recepie.time.hours} hours`} {!!+recepie.time.minutes && `${recepie.time.minutes} minutes`}
                    </span>
                    <h6>Ingredients:</h6>
                    <div className="left-align" >
                        <ol>
                            {recepie.ingredients.map(item => {
                                return <li key={item.name} >{item.name} - {item.quantity} {item.unit}</li>
                            })}
                        </ol>
                    </div>
                </div>
                <div className="col s6 left-align">
                    <h6>Instructions:</h6>
                    <div className='instruction-background'>{recepie.instructions}</div>
                </div></div>
            <button className='red accent-2 btn m10' onClick={() => { setModalDelete(true); setModalDetails(false) }}>Delete Recepie</button>
        </>
    )
}
export default RecepieDetails

RecepieDetails.propTypes = {
    recepie: PropTypes.object,
    setModalDelete: PropTypes.func,
    setModalDetails: PropTypes.func
};