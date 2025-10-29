"use client";

import React, { useEffect, useState, useRef } from 'react';
import './Game.css';

// Simple Whack-a-Mole game
export default function Game() {
  const [holes] = useState(9);
  const [moleIndex, setMoleIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);
  const moleRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    // mole movement interval
    moleRef.current = setInterval(() => {
      const next = Math.floor(Math.random() * holes);
      setMoleIndex(next);
    }, 800);

    // countdown
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setRunning(false);
          clearInterval(timerRef.current);
          clearInterval(moleRef.current);
          setMoleIndex(-1);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      clearInterval(moleRef.current);
      clearInterval(timerRef.current);
    };
  }, [running, holes]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setRunning(true);
  };

  const handleHit = (i) => {
    if (!running) return;
    if (i === moleIndex) {
      setScore((s) => s + 1);
      // make mole disappear briefly
      setMoleIndex(-1);
      setTimeout(() => {
        const next = Math.floor(Math.random() * holes);
        setMoleIndex(next);
      }, 250);
    }
  };

  return (
    <div className="game-root bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-white">
          <div className="text-sm">Time</div>
          <div className="text-2xl font-semibold">{timeLeft}s</div>
        </div>

        <div className="text-white text-center">
          <div className="text-sm">Score</div>
          <div className="text-2xl font-semibold">{score}</div>
        </div>

        <div>
          <button
            onClick={startGame}
            className="px-4 py-2 rounded-md bg-[#7df9ff] text-black font-medium"
          >
            {running ? 'Running' : 'Start Game'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: holes }).map((_, i) => (
          <button
            key={i}
            className={`hole ${i === moleIndex ? 'mole' : ''}`}
            onClick={() => handleHit(i)}
            aria-label={`Hole ${i + 1}`}
          >
            {i === moleIndex ? <span className="mole-dot" /> : null}
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm text-white/70">Whack the mole by clicking the mole dots — higher score before time runs out!</div>
    </div>
  );
}
