



// 10, [[1,5,3], [4,8,7],[6,9,1]]

// before start [0,0,0,0,0,0,0,0,0,0]
// after line one [3,3,3,3,3,0,0,0,0,0]
// after line two [3,3,3,10,10,7,7,7,0,0]
// after line three [3,3,3,10,10,8,8,8,1,0]


const arrayManipulation = (index, queries) => {
    const startArray = new Array(index).fill(0)

    // loop through startArray and assign the startArray[2] to each value between startArray[0] and startArray[2]
    for (let i = queries[0][0]; i <= queries[0][1]; i++) {
        startArray[i - 1] = queries[0][2] + startArray[i - 1]
    }

    for (let j = queries[1][0]; j <= queries[1][1]; j++) {
        startArray[j - 1] = startArray[j - 1] + queries[1][2]
    }

    for (let k = queries[2][0]; k <= queries[2][1]; k++) {
        startArray[k - 1] = startArray[k - 1] + queries[2][2]
    }

    console.log(startArray)

    let maxValue = 0
    for (let m = 0; m < startArray.length; m++) {
        if (startArray[m] > maxValue) {
            maxValue = startArray[m]
        }
    }

    console.log(maxValue)
    return (maxValue)

}

arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])








