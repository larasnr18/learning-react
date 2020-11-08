import React from "react";

const Ninjas = (props) => {
  // console.log(this.props);
  const { ninjas } = props;
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
};

export default Ninjas;
