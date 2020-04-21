export const makeListofIngredients = (arr) => {
    //function that returns list of ingredients separated with comma
    const newArr = []
    arr.map(item => {
        return newArr.push(item.name)
    })
    //returns all the ingredients if there are 3 or less, else returns 3 of them followed by ellipsis
    return newArr.length <= 3 ? newArr.join(", ") : newArr.slice(0, 3).join(", ") + "..."
}

export const instructionsFormat = (ins) => {
    //formating instructions text
    //if there are more then 50 characters
    if (ins.length > 50) {
        //put every character in array
        const charInArr = ins.split('')
        //return 51 of them so you can check if the last character is  in the middle of a word
        const arrOf51 = charInArr.filter((_, i) => i <= 51)
        //join them in a string and make array of words(chars separated by space)
        const arr = arrOf51.join('').split(" ")
        //if the last char of the array of 51 is not space then cut the last word
        if (arrOf51[arrOf51.length] !== " ") {
            const arrayOfWords = arr.slice(0, arr.length - 1)
            return arrayOfWords.join(' ') + '...'
        }
        return arr.join(' ')
    }
    //returns whole text id there are less then 50 characters
    return ins
}

export const handlePreventNonNumericOnKeyPress = e => {
    //on keypress prevent entering nonnumeric values
    //if key code is not between key codes of numeric values from 0 to 9, prevent the action
    if (!(e.which >= 48 && e.which <= 57)) {
        e.preventDefault();
    }
};

