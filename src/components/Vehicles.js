import React, { Component } from "react";
import VehicleItem from "./VehicleItem";
import Accordion from "./Accordion";

export class Vehicles extends Component {
  render() {
    return (
      <div className="vehicles">
        {this.props.vehicles.map((vehicle) => {
          return <VehicleItem key={vehicle.id} vehicle={vehicle} />;
        })}
        <Accordion />
      </div>
    );
  }
}

export default Vehicles;
