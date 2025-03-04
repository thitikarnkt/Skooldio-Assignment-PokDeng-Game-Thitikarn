const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please put your bet: ", function(bet) {
    console.log("Your bet is " + bet);
    rl.close();
});


rl.question("Wanna play more (Yes/No): ", (answer) => {
    if (answer.toLowerCase() === 'yes') {
        startGame();
    } else {
        console.log(`You got total ${bet} chips`);
        rl.close();
    }
});
