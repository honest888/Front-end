import React, { useState } from "react";

export default function ContentRight1({ setStep, step }) {
  const [radioList1, setRadioList1] = useState(["Fabbricati", "Terreni"]);
  const [radioList2, setRadioList2] = useState([
    "Caparra confirmatoria",
    "Acconto sul prezzo di vendita",
    "Caparra e Acconto",
  ]);

  const [radioListActive1, setRadioListActive1] = useState([true, false]);

  const [radioListActive2, setRadioListActive2] = useState([
    true,
    false,
    false,
  ]);

  const handleClick1 = (index) => {
    const tempRadioListActive1 = [false, false];
    tempRadioListActive1[index] = true;
    setRadioListActive1(tempRadioListActive1);
  };

  const handleClick2 = (index) => {
    const tempRadioListActive2 = [false, false, false];
    tempRadioListActive2[index] = true;
    setRadioListActive2(tempRadioListActive2);
  };

  const nextStep = () => {
    setStep(3);
  };

  const prevStep = () => {
    setStep(1);
  };

  return (
    <div className="content-right">
      <div className="right-title">Caparra confirmatoria o acconto?</div>
      <div>
        <div className="right-sub-title">Oggetto della vendita</div>
        <div>
          {radioList1.map((radio, index) => {
            return (
              <div key={"raido1" + index} className="input-radio">
                <input
                  type="radio"
                  checked={radioListActive1[index]}
                  onChange={(e) => handleClick1(index)}
                />
                <label
                  className={`${
                    radioListActive1[index] ? "active-lablel" : "lable"
                  }`}
                  onClick={(e) => handleClick1(index)}
                >
                  {radio}
                </label>
              </div>
            );
          })}
        </div>
        <div className="right-sub-title">Tipo di importo versato</div>
        <div>
          {radioList2.map((radio, index) => {
            return (
              <div key={"raido2" + index} className="input-radio">
                <input
                  type="radio"
                  checked={radioListActive2[index]}
                  onChange={(e) => handleClick2(index)}
                />
                <label
                  className={`${
                    radioListActive2[index] ? "active-lablel" : "lable"
                  }`}
                  onClick={(e) => handleClick2(index)}
                >
                  {radio}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <label className="label">Acconto versato</label>
        </div>
        <input type="text" />
        <input type="checkbox" />
        <label className="label">Ivato</label>
      </div>
      <div>
        <button onClick={prevStep}>Indietro</button>
        <button onClick={nextStep}>Avanti</button>
      </div>
    </div>
  );
}
