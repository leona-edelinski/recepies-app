import { ADD_RECEPIE, DELETE_RECEPIE } from "../actionTypes";

const defaultState = [
    { id: 1, name: "Simple Tomato Soup", src: "Source 1", ingredients: [{ name: "Oil", quantity: 1, unit: "grams" }, { name: "Tomato", quantity: 3, unit: "pieces" }], time: { hours: ' 0', minutes: '30' }, instructions: "Heat butter and olive oil in a large saucepan over medium-low heat and cook onion and garlic until onion is soft and translucent, about 5 minutes. Add tomatoes, water, sugar, salt, pepper, red pepper flakes, celery seed, and oregano. Bring to a boil. Reduce heat, cover, and simmer for 15 minutes." },
    { id: 2, name: "Easter Deviled Eggs", src: "Source 2", ingredients: [{ name: "Tomato", quantity: 2, unit: "pieces" }, { name: "Egg", quantity: 5, unit: "pieces" }], time: { hours: '1', minutes: '40' }, instructions: "Cut hard-cooked eggs in half lengthwise and remove yolks; mash yolks in a bowl with creamy salad dressing, salt, black pepper, hot sauce, and dry mustard until smooth." },
    { id: 3, name: "Best Brownies", src: "Source 3", ingredients: [{ name: "Egg", quantity: 3, unit: "pieces" }, { name: "Flour", quantity: 3, unit: "grams" }, { name: "Milk", quantity: 3, unit: "grams" }, { name: "Potato", quantity: 3, unit: "pieces" }], time: { hours: '1', minutes: '20' }, instructions: "Bake in preheated oven for 25 to 30 minutes. " }
]

const recepieList = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_RECEPIE: {
            return [...state, action.payload];
        }

        case DELETE_RECEPIE: {
            const { id } = action.payload;
            return state.filter(recepie => recepie.id !== id);
        }
        default:
            return state;
    }
};

export default recepieList;