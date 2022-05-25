import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// React Popup installed to display the game rules

const Help = () => {
  return (
    <div>
      <Popup trigger={<button> Help</button>} position="right center">
        <div className="popupBody">
          <ul>
            <li>
              You have 12 turns to match all cards. If you lose, try again!
            </li>
            <br />
            <li>Hit `"New Game"` at any point to restart.</li>
            <br />
            <li>Have fun!</li>
          </ul>
        </div>
      </Popup>
    </div>
  );
};
export default Help;
