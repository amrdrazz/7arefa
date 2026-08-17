import React, { useEffect, useRef, useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { GoXCircleFill } from "react-icons/go";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

import Card from "../imgs/card.png";
import Avatar_placeholder from "../imgs/avatar-placeholder.png";
import { useNavigate } from "react-router-dom";

function GuessGame() {
  const navigate = useNavigate();
  const topRef = useRef();

  const [gameObject, setGameObject] = useState({});

  const [searchStr, setSearchStr] = useState("");
  const [guessId, setGuessId] = useState("");
  const [gameId, setGameId] = useState("");

  const [guesses, setGuesses] = useState([]);

  const [suggestionsListOpen, setSuggestionsListOpen] = useState(false);

  const [suggestions, setSuggestions] = useState([]);

  const [player, setPlayer] = useState({
    name: "",
    ovr: "",
    position: "",
  });

  const handleNewGame = async () => {
    setGuessId("");
    setGameId("");
    setGuesses([]);
    setSuggestionsListOpen(false);
    setSuggestions([]);
    setSearchStr('');
    setPlayer({
      name: "",
      ovr: "",
      position: "",
    });
    setShowPlayer(false);
    document.body.style.overflow='auto';

    const res = await fetch("http://localhost:3000/guess-game/start", {
      method: "POST",
    });

    const data = await res.json();

    setGameId(data.gameId);

    if (res.ok) console.log("Game started");
  };

  const getSuggestions = async (name) => {
    if (name.length < 3) {
      return;
    }
    const res = await fetch(
      `http://localhost:3000/guess-game/search?name=${encodeURIComponent(name.trim())}`,
    );
    const data = await res.json();
    setSuggestions(data);
    // console.log(data);
  };

  const makeGuess = async (id) => {
    if (guesses.filter((guess) => guess.result.id === id).length > 0) {
      return;
    }

    const res = await fetch(`http://localhost:3000/guess-game/guess`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId: gameId,
        playerId: id,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setGuesses((prev) => [data, ...prev]);
      setSuggestions([]);
      setSearchStr('');

      if (data.correct) showGameEnd(data.result.img, "win");

      const correctPlayer = Object.keys(data.result)
        .filter((key) => data.result[key].correct)
        .reduce((acc, key) => {
          acc[key] = data.result[key][key];
          return acc;
        }, {});

      setPlayer((prev) => ({
        ...prev,
        ...correctPlayer,
      }));

      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    console.log(data);
  };

  const showGameEnd = (img, stat) => {
    setGameObject({
      img,
      guessesNum: guesses.length,
      stat,
    });
    setShowPlayer(true);
    document.body.style.overflow='hidden';
  };

  useEffect(() => {
    const startGame = async () => {
      const res = await fetch("http://localhost:3000/guess-game/start", {
        method: "POST",
      });

      const data = await res.json();

      setGameId(data.gameId);

      if (res.ok) console.log("Game started");
    };

    startGame();
  }, []);

  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="guess_game flex flex-col items-center pt-5 px-4 relative">
      <div className="text flex flex-col items-center gap-4 mb-10">
        <h2 className="text-5xl max-sm:text-2xl text-white font-medium">
          GUESS THE FOOTBALLER
        </h2>

        <p className="text-secondary text-2xl max-sm:text-xl">
          Can you find the mystery player?
        </p>
      </div>

      <div ref={topRef} className="top w-full flex max-sm:flex-col max-sm:items-center justify-between gap-10 mb-4 scroll-mt-15.5 transition-all duration-300 ease-in-out" id="top">
        <div className="search sm:flex-1 flex flex-col">
          <div className="search_input relative mt-12">
            <input
              type="text"
              placeholder="Search for a player..."
              className="w-full p-4 pl-14 text-secondary text-2xl border-primary rounded-xl in-focus:border-green-600 outline-0 bg-secondary"
              value={searchStr}
              onFocus={() => {
                setSuggestionsListOpen(true);
              }}
              onBlur={() => {
                setSuggestionsListOpen(false);
              }}
              onChange={(e) => {
                setSearchStr(e.target.value);
                getSuggestions(e.target.value);
              }}
            />
            <IoMdSearch className="absolute top-4 left-3 text-secondary text-4xl" />
          </div>

          <div
            className={`suggestions bg-secondary rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${suggestionsListOpen ? "show" : "hide"}`}
          >
            <ul className="h-full overflow-y-auto">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="flex items-center gap-4 p-3 transition-colors cursor-pointer hover:bg-slate-900"
                  onClick={() => {
                    makeGuess(suggestion.id);
                  }}
                >
                  <div className="img rounded-xl flex h-21 w-16 overflow-hidden">
                    <img
                      src={suggestion.img}
                      alt=""
                      className="player_img h-40 w-auto object-cover"
                    />
                  </div>

                  <div className="info">
                    <div className="name">
                      <p className="text-white text-2xl">{suggestion.name}</p>
                    </div>

                    <div className="play_with">
                      <p className="text-secondary text-lg">
                        <span className="club">{suggestion.club}</span>.{" "}
                        <span className="nation">{suggestion.nation}</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="player_card mt-2">
          <div className="card_img w-70 relative p-2">
            <img src={Card} alt="" className="w-80" />

            <img
              src={Avatar_placeholder}
              alt=""
              className="Avatar_placeholder absolute"
            />
            <p className="p_name absolute text-3xl font-bold">
              {player.name ? player.name : "?????"}
            </p>
            <p className="ovr absolute text-5xl font-bold">
              {player.ovr ? player.ovr : "??"}
            </p>
            <p className="position absolute text-2xl font-bold">
              {player.position ? player.position : "??"}
            </p>
          </div>
        </div>
      </div>

      <div className="guesses w-full">
        <p className="text-2xl text-white">YOUR GUESSES</p>

        <div className="table w-full border-primary rounded-2xl mt-2 mb-4">
          <table className="w-full text-secondary">
            <thead>
              <tr>
                <th>Player</th>
                <th>Club</th>
                <th>League</th>
                <th>Nationality</th>
                <th>Position</th>
                <th>Rating</th>
              </tr>
            </thead>

            <tbody className="h-39 max-lg:h-21.5">
              {guesses.map((guess) => (
                <tr key={guess.result.name}>
                  <td>
                    {
                      <img
                        src={guess.result.img}
                        alt=""
                        className="table_img m-auto"
                      />
                    }
                  </td>
                  <td className="text-black text-4xl font-bold">
                    {guess.result.team.correct ? (
                      <FaCheckCircle className="text-green-500 m-auto" />
                    ) : (
                      <GoXCircleFill className="text-red-600 m-auto" />
                    )}
                  </td>
                  <td className="text-black text-4xl font-bold">
                    {guess.result.league.correct ? (
                      <FaCheckCircle className="text-green-500 m-auto" />
                    ) : (
                      <GoXCircleFill className="text-red-600 m-auto" />
                    )}
                  </td>
                  <td className="text-black text-4xl font-bold">
                    {guess.result.nation.correct ? (
                      <FaCheckCircle className="text-green-500 m-auto" />
                    ) : (
                      <GoXCircleFill className="text-red-600 m-auto" />
                    )}
                  </td>
                  <td className="text-black text-4xl font-bold">
                    {guess.result.position.correct ? (
                      <FaCheckCircle className="text-green-500 m-auto" />
                    ) : (
                      <GoXCircleFill className="text-red-600 m-auto" />
                    )}
                  </td>
                  <td>
                    {guess.result.ovr.correct ? (
                      <FaCheckCircle className="text-4xl text-green-500 m-auto" />
                    ) : guess.result.ovr.state === "higher" ? (
                      <FaArrowAltCircleUp className="text-4xl text-orange-400 m-auto" />
                    ) : (
                      <FaArrowAltCircleDown className="text-4xl text-orange-400 m-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showPlayer && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60">
          <div className="success_modal min-w-xl flex flex-col items-center justify-between gap-4 bg-secondary p-10 rounded-xl shadow-lg shadow-white">
            <div className="img h-1/2">
              <img src={gameObject.img} alt="" className="h-full" />
            </div>

            <div className="content flex flex-col items-center gap-16">
              <div className="flex justify-between gap-18 text-xl">
                <p className="text-secondary">
                  stat: <span className="text-white">{gameObject.stat}</span>
                </p>
                <p className="text-secondary">
                  guesses: <span className="text-white">{gameObject.guessesNum}</span>
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  className="accent font-bold flex items-center gap-2 py-3 px-6 rounded-lg cursor-pointer transition-all hover:scale-105"
                  onClick={handleNewGame}
                >
                  New game
                </button>

                <button
                  onClick={() => {
                    setShowPlayer(false);
                    navigate('/play');
                  }}
                >
                  Back to menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuessGame;
