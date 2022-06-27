import React from "react";
import { ReactDOM } from "react";
import "./Metronome.css";


export default function Metronome() {
    let bpm = 100;
    let playing = false;
 
    return (
        <div className="metronome">
            <div className="bpm-slider">
                <div>{bpm} BPM</div>
                <input type="range" min="60" max="240" value={bpm} />
                </div>
            <button>{playing ? 'Stop' : 'Start'}</button>
        </div>
  );
  }
