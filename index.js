// Code your solutions in this file
let names = ["Sam", "Ismail", "Yakoub"]
function writeCards(array, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}