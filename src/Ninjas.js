import React from "react";

const Ninjas = ({ ninjas }) => {
  // METHOD 1
  // console.log(this.props);
  // const ninjasList = ninjas.map((ninjas) => {
  //   if (ninjas.age > 20) {
  //     return (
  //       <div className="ninja" key={ninjas.id}>
  //         <div>Name: {ninjas.name}</div>
  //         <div>Age: {ninjas.age}</div>
  //         <div>Belt: {ninjas.belt}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }

  // METHOD 2
  // const ninjasList = ninjas.map((ninjas) => {
  //   return ninjas.age>20?(
  //     <div className="ninja" key={ninjas.id}>
  //     <div>Name: {ninjas.name}</div>
  //     <div>Age: {ninjas.age}</div>
  //     <div>Belt: {ninjas.belt}</div>
  //     </div>
  //   ):null
  // });
  // return <div className="ninja-list">{ninjasList}</div>;

  // METHOD 3
  return (
    <div className="ninja-list">
      {ninjas.map((ninjas) => {
        return ninjas.age > 20 ? (
          <div className="ninja" key={ninjas.id}>
            <div>Name: {ninjas.name}</div>
            <div>Age: {ninjas.age}</div>
            <div>Belt: {ninjas.belt}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
