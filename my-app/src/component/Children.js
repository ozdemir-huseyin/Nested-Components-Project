import React, { useState } from "react";
import { person } from "./Data";

function Children(props) {
  const [children, setChildren] = useState(person.children);

  const arrayProcess = children.map((item) => (
    <div key={item.id}>
      <img src={item.avatar} />
      <p> First name : {item.firstName}</p>
      <p> Gender : {item.gender} </p>
      <p> Birthday : {item.birthday} </p>
    </div>
  ));

  const numberOfChildren = arrayProcess.length;
  const numberOfFriend = arrayProcess.length;

  return (
    <div className="children">
      <p className="children-title">
        {props.tittle2} ({numberOfChildren}){" "}
      </p>
      <div className="children-konteks">{arrayProcess}</div>
      <div className="children-down-tittle">
        {props.tittle3}({numberOfFriend})
      </div>
    </div>
  );
}
export default Children;
