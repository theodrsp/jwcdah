// nomor 1
const getPrimitives = (r: unknown[]): unknown[] => {
  return r.filter((val) => {
    return val === null || typeof val !== "object";
  });
};
const r: unknown[] = [1, [], undefined, {}, "string", {}, []];
console.log(getPrimitives(r));

//nomor 2
// const arrExample: number[] = [
//   10, 20, 40, 10, 50, 30, 10, 60, 10,
// ];

// let totalNumber: number = 0
// for (let i: number = arrExample.length; i>=1; i--) {
//     totalNumber = totalNumber + arrExample[i]
// }

// nomor 2
function sumDuplicateValues(numbers: number[]): number {
  const counts = new Map<number, number>();
  for (const number of numbers) {
    const currentCount: number = counts.get(number) ?? 0;
    counts.set(number, currentCount + 1);
  }
  let total: number = 0;
  for (const [number, count] of counts) {
    if (count > 1) {
      total += number * count;
    }
  }
  return total;
}
const arr: number[] = [
  10, 20, 40, 10, 50, 30, 10, 60, 10,
];
console.log(sumDuplicateValues(arr));

//nomor 3
let player1: string = " rock "
let player2: string = "scissors"

function countCondition(player1hand: string, player2hand: string){
    player1hand = player1hand.trim().toLowerCase();
    player2hand = player2hand.trim().toLowerCase();
    
    if (player1hand === player2hand) {
        return "tie"
    } else if (player1hand === "rock" && player2hand === "scissors"){
        return "player 1 win, player 2 loser"
    } else if (player1hand === "paper" && player2hand === "rock"){
        return "player 1 win, player 2 loser"
    } else if (player1hand === "scissors" && player2hand === "paper"){
        return "player 1 win, player 2 loser"
    } 

    else if (player1hand === "rock" && player2hand === "paper"){
        return "player 2 win, player 1 lose"
    } else if (player1hand === "paper" && player2hand === "scissors"){
        return "player 2 win, player 1 lose"
    } else if (player1hand === "scissors" && player2hand === "rock"){
        return "player 2 win, player 1 lose"
    }
}

console.log(countCondition(player1, player2))