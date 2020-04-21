import React, { useState, useMemo } from 'react'
import Modal from './Modal'
import RecepieDetails from './RecepieDetails'
import RecepieEntry from './RecepieEntry'
import { getRecepies } from '../redux/selectors'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteRecepie } from "../redux/actions";
import DeleteRecepie from './DeleteRecepie'
import { makeListofIngredients, instructionsFormat } from '../helpers'

const RecepiesList = () => {
    const [modalDetails, setModalDetails] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [recepie, setRecepie] = useState(false)
    const allRecepies = useSelector(getRecepies);
    const dispatch = useDispatch();

    const openRecepie = (rec) => {
        //open selected recepie in modal
        setRecepie(rec)
        setModalDetails(true)
    }

    const deleteModal = (rec) => {
        //open confirmation modal for deleting recepie
        setModalDelete(true)
        setRecepie(rec)
    }

    const memorizedTable = useMemo(() => {
        return (
            <table style={{ width: "85%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Recepie Name</th>
                        <th>Recepie Source</th>
                        <th>Number of Ingredients</th>
                        <th>Ingredients</th>
                        <th>Instructions</th>
                        <th>Time</th>
                        <th>Details</th>
                        <th>Removal</th>
                    </tr>
                </thead>
                <tbody>
                    {allRecepies.map((recepie, index) => {
                        return (
                            <tr key={recepie.id}>
                                <td>{recepie.id}</td>
                                <td>{recepie.name}</td>
                                <td>{recepie.src}</td>
                                <td>{recepie.ingredients.length}</td>
                                <td>{makeListofIngredients(recepie.ingredients)}</td>
                                <td>{instructionsFormat(recepie.instructions)}</td>
                                <td>{!!+recepie.time.hours && `${recepie.time.hours} hours`} {!!+recepie.time.minutes && `${recepie.time.minutes} minutes`}</td>
                                <td><button className="waves-light btn" onClick={() => openRecepie(recepie)}>View</button></td>
                                <td><button className="red accent-2 btn" onClick={() => deleteModal(recepie)}>Delete</button></td>
                            </tr>
                        )
                    })
                    }</tbody>
            </table>
        )
    }, [allRecepies])

    return (
        <div>
            {modalDelete && <Modal onClick={() => setModalDelete(false)} title="Delete Recepie"><DeleteRecepie setModalDelete={setModalDelete} deleteRecepie={() => dispatch(deleteRecepie(recepie.id))} /></Modal>}
            {modalDetails && <Modal onClick={() => setModalDetails(false)} title="Recepie Details"><RecepieDetails setModalDelete={setModalDelete} setModalDetails={setModalDetails} recepie={recepie} title="Recepie Details" /></Modal>}
            {modalAdd && <Modal onClick={() => setModalAdd(false)} title="Recepie Entry"><RecepieEntry setModalAdd={setModalAdd} /></Modal>}
            <h1 className="light-pink">RECEPIES</h1>
            {memorizedTable}
            <div><button className="btn red lighten-2" style={{ marginTop: 20 }} onClick={() => setModalAdd(true)}>Add new Recepie</button></div>
        </div>
    )
}
export default RecepiesList