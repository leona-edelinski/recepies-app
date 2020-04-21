import React from 'react'
import PropTypes from 'prop-types';

const DeleteRecepie = ({ deleteRecepie, setModalDelete }) => {

    const confirmDelete = () => {
        deleteRecepie()
        setModalDelete(false)
    }
    return (
        <div style={{ padding: 10 }}>
            <h6 style={{ padding: 30 }}>Are you sure you want to delete this recepie?</h6>
            <button className="waves-light btn m10" onClick={() => setModalDelete(false)}>Cancel</button>
            <button className="red accent-2 btn m10" onClick={confirmDelete}>Delete</button>
        </div>
    )
}

export default DeleteRecepie

DeleteRecepie.propTypes = {
    deleteRecepie: PropTypes.func,
    setModalDelete: PropTypes.func
};