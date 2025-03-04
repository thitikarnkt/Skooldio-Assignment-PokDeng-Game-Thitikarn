const readline = require('readline');

// Player วางเดิมพัน
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// แสดงเดิมพันที่ Player ได้ลงไว้
rl.question("Please put your bet: ", function(bet) {
    console.log("Your bet is " + bet);
    rl.close();
});


// สร้างสำรับไพ่
const deck = [];
const createDeck = () => {
    const suits = ["clubs", "diamonds", "hearts", "spades"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({ suit, value });
      });
    });
  };
// createDeck();
// console.log(deck)

// rl.question("Wanna play more (Yes/No): ", (answer) => {
//     if (answer.toLowerCase() === 'yes') {
//         startGame();
//     } else {
//         console.log(`You got total ${bet} chips`);
//         rl.close();
//     }
// });
