import { Deck } from "./Deck.js";
const body = document.querySelector("body");
console.log(body);
const options = {
  values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};
const deck = new Deck(options);
deck.createFullDeck();
console.log(deck.shuffle());
deck.displayCards();
// Lorsque vous utilisez insertAdjacentHTML, la méthode attend une chaîne de caractères HTML en tant que premier argument et non un objet DOM. En utilisant un objet DOM directement, vous obtenez la valeur [object HTMLDivElement].

// Pour ajouter le contenu de l'objet div à votre page HTML, vous pouvez utiliser la méthode appendChild sur l'élément parent, par exemple:

const div = document.createElement("div");
div.classList = "txt";
const p = document.createElement("p");
p.innerHTML = "Coucou";
div.appendChild(p);
body.append(div);
const tailleDemontexte = p.fontSize;
console.log(tailleDemontexte);
const handlemouse = (e) => {
  e.target.style.color = "orange";

  e.target.style.fontStyle = "italic";
  e.target.style.marginTop = "200px";
};
div.addEventListener("mouseover", handlemouse);
