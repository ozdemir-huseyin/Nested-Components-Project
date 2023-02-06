import React, { useState } from "react";

import { person } from "./Data";

function Friend() {
  const [friends, setFriends] = useState(person.friends);
  const arrayProcess = friends.map((item) => (
    <div key={item.id}>
      <img src={item.avatar} />
      <p> First name : {item.firstName}</p>
      <p> Gender : {item.gender} </p>
      <p> Birthday : {item.birthday} </p>
    </div>
  ));

  return (
    <div className="friend">
      <p className="friend-kontek"> {arrayProcess} </p>
    </div>
  );
}
export default Friend;
