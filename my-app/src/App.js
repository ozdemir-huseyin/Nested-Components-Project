import "./App.css";

import Person from "./component/Person";
import Children from "./component/Children";

import Friend from "./component/Friend";

function App() {
  return (
    <div>
      <div className="up-konteks">
        <Person tittle1="PERSON" />

        <div>
          <Children tittle2="CHILDREN" tittle3="FRIENDS" />
          <Friend />
        </div>
      </div>
    </div>
  );
}

export default App;
