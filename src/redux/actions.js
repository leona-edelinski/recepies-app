import { ADD_RECEPIE, DELETE_RECEPIE } from "./actionTypes";

let nextRecepieId = 3;

export const addRecepie = content => ({
    type: ADD_RECEPIE,
    payload: {
        id: ++nextRecepieId,
        ...content
    }
});

export const deleteRecepie = id => {
    return {
        type: DELETE_RECEPIE,
        payload: { id }
    }
}

