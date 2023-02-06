import Card from "./Card";
import * as shuffle from "lodash-es";
export class Deck {
  #cards = [];
  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }

  createFullDeck() {
    this.values.forEach((value) => {
      this.suits.forEach((suit) => {
        this.#cards.push(new Card(value, suit));
      });
    });
    return this.#cards;
  }
  shuffle() {
    this.#cards = shuffle.shuffle(this.#cards);
    return this;
  }

  displayCards() {
    this.#cards.forEach((card) => {
      card.display();
    });
    //return;
  }
}
