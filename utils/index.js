"use strict";

import random from "./random.js";

var player1;
var newGame = false;

const raffleGame = document.querySelector('#randomGame');

raffleGame.onclick = () => {
    player1 = random(newGame);
}