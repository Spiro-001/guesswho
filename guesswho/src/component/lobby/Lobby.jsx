import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Lobby.css";

function Lobby() {
  const [selectedGame, setSelectedGame] = useState();
  const history = useHistory();

  const handleJoinGame = () => {
    history.push(`play/${selectedGame}`);
  };

  return (
    <div className="lobby">
      {selectedGame}
      <div className="left">
        <div className="current">
          <h1>Lobby</h1>
          <div className="games">
            <div id="game" key="1" onClick={(e) => setSelectedGame(1)}>
              <span id="lobby-name">game-1</span>
              <span id="player-amount">1/2</span>
            </div>
            <div id="game" key="2" onClick={(e) => setSelectedGame(2)}>
              <span id="lobby-name">game-2</span>
              <span id="player-amount">0/2</span>
            </div>
            <div id="game" onClick={(e) => setSelectedGame(3)}>
              <span id="lobby-name">game-3</span>
              <span id="player-amount">2/2</span>
            </div>
            <div id="game" onClick={(e) => setSelectedGame(4)}>
              <span id="lobby-name">game-4</span>
              <span id="player-amount">1/2</span>
            </div>
          </div>
        </div>
        <div className="menu-buttons">
          <input
            type="button"
            className="button create"
            value="Create a game"
          />
          <input
            type="button"
            className="button join"
            value="Join a game"
            onClick={handleJoinGame}
            disabled={selectedGame ? false : true}
          />
        </div>
      </div>
      <div className="right">
        <div className="profile">username</div>
      </div>
    </div>
  );
}

export default Lobby;
