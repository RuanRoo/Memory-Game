import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Help from "./Components/Help";
import Footer from "./Components/Footer";
import "./App.css";

// Array of my card images

const cardImages = [
  { src: "/Images/ian-dooley.jpg", matched: false },
  { src: "/Images/maximalfocus.jpg", matched: false },
  { src: "/Images/mcgill-library.jpg", matched: false },
  { src: "/Images/pepsi.jpg", matched: false },
  { src: "/Images/tim-hufner.jpg", matched: false },
  { src: "/Images/yasin-aribuga.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards by spreading my array of images twice as to create 12 images, each one duplicated once. I then use the sort method
  // and give each a image object a random id by using math.random to shuffle them.

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() * 9999)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    // Turns will always start at zero when a new game is started
    setTurns(0);
  };

  // Handle a choice

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare the 2 cards that are selected
  // If 2 cards are selected (choiceOne and choiceTwo), then we run the function to see if their src is a match.
  // If they match, the state is updated and the matched property turns to true (if the card object src matches the choiceOne/Two src.)

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(getUpdatedCardsArray());
        setTimeout(() => resetTurn(), 1000);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const getUpdatedCardsArray = () => {
    return cards.map((card) => {
      if (card.src === choiceOne.src) {
        return { ...card, matched: true };
      } else {
        return card;
      }
    });
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);

    // Checks if there are any unmatched cards left in the array. If all are matched, the player wins and the game resets

    let unmatchedCards = cards.filter(function (card) {
      return card.matched === false;
    });

    if (unmatchedCards.length === 2) {
      alert("YOU WIN!!!");
      shuffleCards();
    }

    // If turns reach 12, the player loses and the game resets

    if (turns === 11) {
      alert("You lose, start again");
      shuffleCards();
    }
  };

  // Start game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <Header />
      <span>
        <button onClick={shuffleCards}>New Game</button>

        <Help />
      </span>

      <p>Turns: {turns}</p>
      <div className="grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default App;
