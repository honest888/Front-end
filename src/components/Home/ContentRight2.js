import React, { useState } from "react";

export default function ContentRight2({ setStep, step }) {
  const prevStep = () => {
    setStep(2);
  };
  const firstStep = () => {
    setStep(1);
  };

  return (
    <div className="content-right">
      <div className="right-title">Imposta di registro</div>
      <div className="group">
        <div className="label-textbox-group left">
          <div className="label">Codice</div>
          <input type="number" className="text-left text-box"></input>
          <input type="number" className="text-left text-box"></input>
        </div>
        <div className="label-textbox-group">
          <div className="label">Importo</div>
          <input type="number" className="text-right text-box"></input>
          <input type="number" className="text-right text-box"></input>
        </div>
      </div>
      <div>
        <button onClick={prevStep}>Indietro</button>
        <button className="go-to-first" onClick={firstStep}>
          Torna all’inizio
        </button>
      </div>
      <div>
        <label className="label active-link">
          Calcola eventuali sanzioni e interessi
        </label>
      </div>
    </div>
  );
}
