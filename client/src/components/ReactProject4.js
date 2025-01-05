



// [4,5,2,8,1]


const maximumToys = (array, money) => {
    let sortedArray = array.sort((a, b) => (a - b))

    let toysPurchased = 0;
    for (let i = 0; i < array.length; i++) {
        if (money >= sortedArray[i]) {
            money = money - sortedArray[i]
            toysPurchased = toysPurchased + 1
        }
    }
    console.log(toysPurchased)
    return (toysPurchased)

}

maximumToys([3, 5, 2, 8, 2, 1], 8)





