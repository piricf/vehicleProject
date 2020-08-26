import React, { Component } from "react";
import "./Accordion.css";

export class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      showText: false,
    };
  }

  toggleText() {
    this.setState({ showText: !this.state.showText });
  }
  render() {
    return (
      <div className="accordion">
        <button className="button" onClick={() => this.toggleText()}>
          <span>Read more..</span>
        </button>
        <div className="accordion__text">
          {this.state.showText ? (
            <div>
              <p>
                Audi, BMW and Mercedes: names we all know, brands we all
                recognise. UK car buyers can’t get enough of these German cars.
                And despite sales of all three brands taking a hit in 2018, they
                have all started to bounce back, proving the British buyers
                really can’t get enough of these popular brands. It’s not hard
                to see why. Of course, there’s the upmarket image, but there’s
                also the fact that each manufacturer excels at what it does,
                producing cars with excellent engines, beautifully crafted
                interiors and strong secondhand values
              </p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Accordion;
