import React, { useState } from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import ContentRight1 from "./ContentRight1";
import ContentRight2 from "./ContentRight2";
import Sidebar from "./Sidebar";
import "../../assets/css/home.css";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="row home">
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <Sidebar />
        </div>
        <div className="col-sm-6 col-md-8 col-lg-9 col-xl-10 right">
          <div className="title-part">
            <div className="subtitle">CALCOLI IMMOBILIARI</div>
            <div className="title">Calcoli</div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xl-4">
              <ContentLeft />
            </div>
            <div className="col-md-12 col-xl-8">
              {step == 1 ? (
                <ContentRight setStep={setStep} step={step} />
              ) : step == 2 ? (
                <ContentRight1 setStep={setStep} step={step} />
              ) : (
                <ContentRight2 />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
