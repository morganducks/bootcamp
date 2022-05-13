// let spaces = "He llo World !"
// let space = " "
// let countSpaces = 0

// function getSpaces() {
//     // loop through stright find space
//     for(let i = 0; i < spaces.length; i++) {
//         if(spaces[i] === space) {
//             console.log(spaces[i])
//             countSpaces++
//             console.log(countSpaces)
//         }
//     }
// }

// getSpaces()


let spaces = " Ha  ppy S t. Patrick 's D a y! "
let space = " "
let concat = ""

function getSpaces(spaces) {
    for(let i = 0; i < spaces.length; i++) {
        if(spaces[i] !== space) {
            concat += spaces[i]
            // console.log(concat)
        }
    }
    return concat
}

console.log(getSpaces(spaces))
