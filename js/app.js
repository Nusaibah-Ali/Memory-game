/*
 * Create a list that holds all of your cards
 */
 const cards =['fa-diamond', 'fa-diamond',
               'fa-paper-plane-o', 'fa-paper-plane-o',
               'fa-anchor', 'fa-anchor',
               'fa-bolt', 'fa-bolt',
               'fa-cube', 'fa-cube',
               ' fa-leaf', ' fa-leaf',
               'fa-bicycle', 'fa-bicycle',
               'fa-bomb', 'fa-bomb'
              ];
let openCards =[];
 function createCard(card) {
     return `<li class="card"><i class="fa ${card}"></i></li>`;
 }

 const deck = document.querySelector('.deck');

  function startGame() {

  const cardList = shuffle(cards).map(function (card) {
  return createCard(card);
  });

  deck.innerHTML = cardList.join('');
  }
  startGame();


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 deck.addEventListener('click', function (event) {
  const clicked = event.target;
  openCards.push(clicked);
  if (openCards.length > 2 && !clicked.classList.contains('match')){
    addClasses(clicked);
    checkForMatch();


}

});


function addClasses(clicked) {
  clicked.classList.toggle("open");
  clicked.classList.toggle("show");
}
 //function removeClasses(clicked) {
   //clicked.classList.remove("open");
   //clicked.classList.remove("show");
// }

function checkForMatch() {
   if (
     openCards[0].firstElementChild.className===
     openCards[1].firstElementChild.className)
     {
       openCards[0].classList.toggle('match');
       openCards[1].classList.toggle('match');
       openCards=[];



   }else {
     setTimeout(() => {
    // removeClasses(clicked);
     openCards=[];
   },1000);
   }
 }



 // Get the modal
 var modal = document.getElementById('myModal');

 // Get the button that opens the modal
 var btn = document.querySelector(".restart");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }




/*
 const eachCard = document.querySelectorAll('.card');

 eachCard.forEach.addEventListener("click", function (card) {

   //card.addEventListener("click", function() {


     card.classList.toggle("open");
     card.classList.toggle("show");


});


  function isMatch() {
   if ( openCards[0].firstElementChild == openCards[1].firstElementChild) {

          openCards[0].classList.toggle('match');
          openCards[1].classList.toggle('match');
          openCards=[];
     } else {
       setTimeout(() => {


         openCards[0].classList.remove("open");
         openCards[0].classList.remove("show");
         openCards[1].classList.remove("open");
         openCards[1].classList.remove("show");

     },4000);
     }
 } */
