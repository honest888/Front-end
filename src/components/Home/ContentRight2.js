import React from "react";
import { Kanban } from "react-bootstrap-icons";

export default function ContentRight2() {
  return (
    <div className="content-right">
      <div className="right-title">Imposta di registro</div>
      <div className="row">
        <label className="label col-sm-4">Codice</label>
        <label className="label col-sm-8">Importo</label>
      </div>
      <div className="row">
        <input type="text" className="col-sm-4"></input>
        <input type="text" className="col-sm-8"></input>
      </div>
      <div className="row">
        <input type="text" className="col-sm-4"></input>
        <input type="text" className="col-sm-8"></input>
      </div>
      <div className="row">
        <label className="label active-link">
          Calcola eventuali sanzioni e interessi
        </label>
      </div>
    </div>
  );
}
