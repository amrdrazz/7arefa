import React from "react";

import GuessImg from "../imgs/hero.png";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBrain, FaGamepad, FaFutbol } from "react-icons/fa";

function About() {
  const games = [
    {
      title: "GUESS",
      disc: "Guess the footballer from the clues.",
      img: GuessImg,
      link: "/play/guess",
      available: true,
    },
    {
      title: "COMING SOON",
      disc: "More exciting football games are on the way.",
      img: GuessImg,
      available: false,
    },
  ];

  return (
    <div className="about min-h-screen flex flex-col gap-8 px-4 py-8 md:px-8 md:py-10">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-secondary rounded-3xl px-6 py-14 md:px-12 md:py-20 text-center text-white">

        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-green-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto">

          <p className="text-green-400 font-bold tracking-[0.3em] text-sm md:text-base mb-5">
            WELCOME TO 7AREFA
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-7">
            FOOTBALL
            <br />
            <span className="text-green-400">ISN'T JUST A GAME.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            It's knowledge, strategy, passion, and the ability to prove
            that you really know football.
          </p>

          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              KNOWLEDGE
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              STRATEGY
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              COMPETITION
            </span>
          </div>

        </div>
      </section>


      {/* ================= WHAT IS 7AREFA ================= */}
      <section className="bg-secondary rounded-3xl px-5 py-10 md:px-10 md:py-14 text-white">

        <div className="max-w-3xl mx-auto text-center mb-10">

          <p className="text-green-400 font-semibold tracking-widest text-sm md:text-base mb-3">
            THE IDEA BEHIND 7AREFA
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            WHAT IS <span className="text-green-400">7AREFA?</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            7arefa is a gaming platform made for football fans, built to
            turn your passion and knowledge of the game into a fun and
            competitive experience.
          </p>

        </div>


        {/* Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">

          {/* Knowledge */}
          <div className="group bg-primary/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-400/10 text-green-400 text-xl mb-5 group-hover:scale-110 transition">
              <FaBrain />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Knowledge Matters
            </h3>

            <p className="text-gray-400 leading-relaxed">
              It's not all about luck. Your knowledge of players, clubs,
              leagues, and stats can be the difference between winning
              and losing.
            </p>

          </div>


          {/* Games */}
          <div className="group bg-primary/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-400/10 text-green-400 text-xl mb-5 group-hover:scale-110 transition">
              <FaGamepad />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Different Games
            </h3>

            <p className="text-gray-400 leading-relaxed">
              From identifying mystery players in{" "}
              <span className="text-white font-semibold">Guess</span>{" "}
              to competing against an opponent in{" "}
              <span className="text-green-400 font-semibold">Clash</span>.
            </p>

          </div>


          {/* Future */}
          <div className="group bg-primary/40 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-400/10 text-green-400 text-xl mb-5 group-hover:scale-110 transition">
              <FaFutbol />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Just The Beginning
            </h3>

            <p className="text-gray-400 leading-relaxed">
              More games and challenges will be added over time,
              bringing fun, competition, and football together.
            </p>

          </div>

        </div>


        {/* Statement */}
        <div className="max-w-3xl mx-auto text-center mt-12">

          <div className="h-px bg-white/10 mb-8" />

          <p className="text-2xl md:text-3xl font-black leading-relaxed">
            Know football.
            <br />
            <span className="text-green-400">
              Think smart.
            </span>
            <br />
            Play it like a{" "}
            <span className="text-green-400">
              7arefa.
            </span>{" "}
            ⚽
          </p>

        </div>

      </section>


      {/* ================= OUR GAMES ================= */}
      <section className="bg-secondary rounded-3xl px-5 py-10 md:px-10 md:py-14">

        <div className="text-center mb-10">

          <p className="text-green-400 font-semibold tracking-widest text-sm mb-3">
            PLAY & COMPETE
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            OUR <span className="text-green-400">GAMES</span>
          </h2>

        </div>


        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">

          {games.map((game, i) => (

            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border p-6 flex flex-col items-center text-center transition-all duration-300
                ${
                  game.available
                    ? "bg-primary/40 border-white/10 hover:-translate-y-2 hover:border-green-400/40"
                    : "bg-primary/20 border-white/5"
                }`}
            >

              {/* Image */}
              <div className="w-48 md:w-56 mb-5 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={game.img}
                  alt={game.title}
                  className={`w-full ${!game.available ? "opacity-30 grayscale" : ""}`}
                />
              </div>


              {/* Title */}
              <h3 className="text-3xl font-black text-white mb-3">
                {game.title}
              </h3>


              {/* Description */}
              <p className="text-gray-400 max-w-xs leading-relaxed mb-6">
                {game.disc}
              </p>


              {/* Button */}
              {game.available ? (

                <Link
                  to={game.link}
                  className="accent text-lg font-bold flex items-center gap-3 py-3 px-7 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <FaArrowRight />
                  PLAY NOW
                  <FaArrowRight />
                </Link>

              ) : (

                <div className="border border-white/10 text-gray-500 text-lg font-bold py-3 px-7 rounded-xl">
                  COMING SOON
                </div>

              )}

            </div>

          ))}

        </div>

      </section>


      {/* ================= OUR GOAL ================= */}
      <section className="relative overflow-hidden bg-secondary rounded-3xl px-6 py-14 md:py-20 text-center text-white">

        <div className="absolute inset-0 bg-green-400/[0.02]" />

        <div className="relative max-w-3xl mx-auto">

          <p className="text-green-400 font-semibold tracking-[0.25em] text-sm mb-4">
            OUR GOAL
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            MAKE FOOTBALL
            <br />
            <span className="text-green-400">
              MORE FUN.
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
            We want to create games that make football fans think,
            compete, laugh, and enjoy the game they love in a whole new way.
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="text-center pt-2 pb-4">

        <p className="text-gray-500 text-lg pb-4">
          Built with passion for football by{" "}
          <a
            href="https://amr-mohamed-portfolio-one.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="accent bg-clip-text text-transparent font-bold"
          >
            Amr Mohamed
          </a>
        </p>

      </footer>

    </div>
  );
}

export default About;