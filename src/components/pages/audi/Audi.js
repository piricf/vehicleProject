import React, { Component } from "react";
import AudiLogo from "../../../assets/Audi.jpg";
import AudiModels from "./AudiModels";
import AudiA3 from "./AudiA3";

import "./Audi.css";

export class Audi extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false,
    };
  }

  toggleInfo() {
    this.setState({ showMe: !this.state.showMe });
  }
  render() {
    return (
      <div className="audi">
        <h1 className="audi__tittle">Audi</h1>
        <img src={AudiLogo} alt="AudiLogo" className="audi__logo" />
        <button className="button__info" onClick={() => this.toggleInfo()}>
          <span>About Audi</span>
        </button>
        <div className="audi__info">
          {this.state.showMe ? (
            <div>
              <p>
                Audi Sport has stood behind the successful motor racing
                involvement of AUDI AG for 40 years.Nowadays, the Ingolstadt
                manufacturer markets its most sporty Audi models and accessories
                under the label Audi Sport. The first motor racing activities of
                the Audi brand began in the late 1970s under the tagline Audi
                Motorsport. With its entry into the World Rally Championship in
                1980, the brand changed the name of its motorsport department to
                Audi Sport. Even then, works-run motorsport at Audi was part of
                the Technical Development (TE) department. This close connection
                guarantees the technology transfer between motorsport and series
                production. Traditionally, this is a decisive reason for Audi
                taking on top-level motorsport.
              </p>
            </div>
          ) : null}
        </div>
        <div></div>
        <div>
          <AudiModels />
        </div>
        <div>
          <AudiA3 />
        </div>
      </div>
    );
  }
}

export default Audi;
