import React, { useState } from "react";

import { person } from "./Data";

function Person(props) {
  const [ilkDurum, sonDurum] = useState([person]);

  const arrayProcess = ilkDurum.map((item) => (
    <div key={item.id}>
      <img src={item.avatar} />

      <h3>Your profile</h3>
      <p> First name : {item.first_name}</p>

      <p> Last name : {item.last_name}</p>

      <p> Adress : {item.address} </p>

      <p>Gender : {item.gender} </p>

      <p> Email : {item.email} </p>
    </div>
  ));
  return (
    <div className="person">
      <p className="person-tittle"> {props.tittle1}</p>
      <p className="person-konteks"> {arrayProcess}</p>
    </div>
  );
}
export default Person;
