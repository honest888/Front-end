import React, { useState } from "react";
import index from ".";

export default function ContentRight() {
  const [radioList, setRadioList] = useState([
    "Registrazione del contratto d’affitto, della proroga o dell’annualità",
    "Registrazione della risoluzione",
    "Registrazione del subentro del conduttore",
    "Registrazione del contratto in comodato gratuito",
    "Registrazione di una proposta d’acquisto o preliminare di vendita",
  ]);

  const [radioListActive, setRadioListActive] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const tempRadioListActive = [false, false, false, false, false];
    tempRadioListActive[index] = true;
    setRadioListActive(tempRadioListActive);
  };

  return (
    <div className="content-right">
      <div className="right-title">Tipo di registrazione</div>
      <div>
        {radioList.map((radio, index) => {
          return (
            <div key={"radio" + index} className="input-radio">
              <input
                type="radio"
                checked={radioListActive[index]}
                onChange={(e) => handleClick(index)}
              />
              <label
                className={`${
                  radioListActive[index] ? "active-label" : "label"
                }`}
                onClick={(e) => handleClick(index)}
              >
                {radio}
              </label>
            </div>
          );
        })}
        <button>Avanti</button>
      </div>
    </div>
  );
}
