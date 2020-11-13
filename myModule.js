const favFoods = ["sushi", "pizza", "ramen", "steak"]

function printFoods (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

module.exports = {
    favFoods,
    printFoods,
}