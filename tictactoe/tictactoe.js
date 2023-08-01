let table = [["","",""],
            ["","",""],
            ["","",""],]

function placeMove(player, grid, table) {
    let [row, col] = grid

    if(table[row][col] === "") {
        table[row][col] = player;
    } else {
        console.log("currentMove not available, try again");
    }

    function checkWins(table){
        for(let i = 0; i < table.length; i++) {
            if((table[i][0] === table[i][1] && table[i][1] === table[i][2] && table[i][0] !== "") || (table[0][i] === table[1][i] && table[1][i] === table[2][i] && table[0][i] !== "") || (table[0][0] === table[1][1] && table[1][1]===table[2][2] && table[0][0] !== "") || (table[0][2]=== table[1][1] && table[1][1]=== table[2][0] && table[2][0] !== "" )) {
                return `thanks for playing.`
            }
        }
    }

    if(checkWins(table)) {
        console.log(table)
        console.log(`${player}: Wins`)
     return checkWins(table);
    } else {
        console.log(table)
        return availableMoves(table)
    }

}

function availableMoves(table) {
    let availableMoves = [];
    for(let i = 0; i < table.length; i++) {
        for(let j = 0; j < table.length; j++) {
            if(table[i][j] === '') {
                availableMoves.push([i,j])
            }
        }
    }
    return availableMoves
}

function computerMove(table) {
    let moves = availableMoves(table)
    let randMove = moves[Math.floor(Math.random() * moves.length)]
    let [r, c] = randMove;
    table[r][c] = "X"
    console.log(availableMoves(table));
    console.log(table[0])
    console.log(table[1])
    return table[2]
}


placeMove("O", [1,1], table)
console.log(computerMove(table))
// placeMove("O", [2,2], table)
// console.log(computerMove(table))
// placeMove("O", [2,2], table)
// console.log(computerMove(table))
// placeMove("O", [2,2], table)
// console.log(computerMove(table))
