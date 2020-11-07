import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    // console.log(this.props);
    const { ninjas } = this.props;
    const ninjasList = ninjas.map((ninjas) => {
      return (
        <div className="ninja" key={ninjas.id}>
          <div>Name: {ninjas.name}</div>
          <div>Age: {ninjas.age}</div>
          <div>Belt: {ninjas.belt}</div>
        </div>
      );
    });
    return <div className="ninja-list">{ninjasList}</div>;
  }
}

export default Ninjas;
