// Code your solutions in this file
let cards = ['Lisa', 'Kaitlin', 'Jan'];
  function writeCards(cards) {
    let array = [];
    for (let i = 0; i < cards.length; i++) {
    array.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
   debugger; 
  } 
   return array;
}

function countDown() {
  let i = 10;
  while (i >= 0) {
    console.log(i - 0);
    i--;
  }
}
countDown(10);