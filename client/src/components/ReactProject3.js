


const twoStrings = (string1, string2) => {
    let string1set = new Set()

    // pushing string1 into a set so there are no repeaters
    for (let i = 0; i < string1.length; i++) {
        if (string1set.has(string1[i])) {
            continue
        }
        else {
            string1set.add(string1[i])
        }
    }

    // looping through string2 too test for matches
    for (let j = 0; j < string2.length; j++) {
        if (string1set.has(string2[j])) {
            console.log("yes")
            return ("yes")
        }
    }
    console.log("no")
    return ("no")
}


twoStrings("and", "brt")









