


// function NewYearsLineBribes() {





//     return (

//         <>

//         </>
//     )
// }

// export default NewYearsLineBribes;





// funtion that receives the input of an array showing final positions

// [0,1,2,3,4,5]
// [1,2,3,4,5,6]

// [1,4,3,2,6,5]
// [1,2,4,6,3,5]


// const lineBribes = (array) => {
//     let numberOfBribes = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === i + 1 && array[i + 1] >= array[i]) {
//             numberOfBribes = numberOfBribes
//         }
//         else if (array[i] === i + 2) {
//             numberOfBribes = numberOfBribes + 1
//         }
//         else if (array[i] === i + 3) {
//             numberOfBribes = numberOfBribes + 2
//         }
//         else if (array[i] >= i + 4) {
//             numberOfBribes = "Chaotic"
//         }
//         // else if (array[i] === i + 1 && array[i + 1] > array[i + 2]) {
//         //     numberOfBribes = numberOfBribes + 1
//         // }
//     }
//     console.log(numberOfBribes)
//     return (numberOfBribes)
// }

// lineBribes([1, 4, 3, 2, 6, 5])