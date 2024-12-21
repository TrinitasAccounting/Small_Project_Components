

// Question 1)  Left rotation for an array, provided with the array and X number of rotations

// function rotLeft() {

// }

const rotLeft2 = (arr, d) => {

    let split = d <= arr.length / 2 ? arr.length - d : arr.length - d;
    let secondSplit = 0
    console.log(arr.length % 2);
    if ((arr.length % 2) === 0) {
        secondSplit = d <= arr.length / 2 ? d - 1 : ((d - 1));
        // ((d + 1) - split)
    }
    else {
        secondSplit = d <= arr.length / 2 ? d - 1 : (d - 1);
    }

    // let secondSplit = d <= arr.length / 2 ? d + 1 : (d - split);
    console.log(split);
    let arrLength = arr.length;
    let newArr = [];
    for (let i = (arr.length - split); i < arrLength; i++) {
        newArr.push(arr[i])
    }
    // (d-split)
    for (let j = 0; j <= (secondSplit); j++) {
        newArr.push(arr[j])
    }

    return (newArr);

}


console.log(rotLeft2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4));
