import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

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
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="00T"
            suffix="T"
            className="text-box text-left"
          />
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="00T"
            suffix="T"
            className="text-box text-left"
          />
        </div>
        <div className="label-textbox-group">
          <div className="label">Importo</div>
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="€00,00"
            decimalsLimit={2}
            groupSeparator="."
            decimalSeparator=","
            prefix="€"
            className="text-box text-right"
          />
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="€00,00"
            decimalsLimit={2}
            groupSeparator="."
            decimalSeparator=","
            prefix="€"
            className="text-box text-right"
          />
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
