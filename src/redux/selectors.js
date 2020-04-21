export const getRecepies = store => store.recepieList;

export const getRecepieById = (store, id) => ({ ...store.recepieList[id], id });
