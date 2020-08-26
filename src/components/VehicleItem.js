import React, { Component } from "react";
import Audi from "../assets/Audi.jpg";
import BMW from "../assets/BMW.jpg";
import Mercedes from "../assets/Mercedes.jpg";
import AudiFront from "../assets/AudiFront.jpg";
import BMWFront from "../assets/BMWFront.jpg";
import MercedesFront from "../assets/MercedesFront.jpg";
import "../App.css";

export class VehicleItem extends Component {
  setVehicleLogo() {
    switch (this.props.vehicle.name) {
      case "Audi":
        return Audi;
      case "BMW":
        return BMW;
      case "Mercedes":
        return Mercedes;
      default:
        return;
    }
  }

  setVehiclePicture() {
    switch (this.props.vehicle.name) {
      case "Audi":
        return AudiFront;
      case "BMW":
        return BMWFront;
      case "Mercedes":
        return MercedesFront;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="vehicles">
        <h3 className="vehicles__tittle">{this.props.vehicle.name}</h3>
        <div className="vehicles__logo">
          <img
            src={this.setVehicleLogo()}
            className="vehicles__logo__picture"
            alt="Logo"
          />
        </div>
        <div className="vehicles__front">
          <img
            src={this.setVehiclePicture()}
            className="vehicles__front__mask"
            alt="Front"
          />
        </div>
      </div>
    );
  }
}

export default VehicleItem;
