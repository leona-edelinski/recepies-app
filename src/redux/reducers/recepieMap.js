import { ADD_RECEPIE } from "../actionTypes";

const defaultState = {};

const recepieMap = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_RECEPIE: {
            const { id, content } = action.payload;
            return {
                ...state,
                [id]: {
                    content,
                }
            };
        }

        default:
            return state;
    }
};

export default recepieMap;
