//App.jss

import { useState } from "react";
import ButtonLess from './components/ButtonLess';
import ButtonPlus from "./components/ButtonPlus";
import ButtonReset from "./components/ButtonReset";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="container">
      <h1 className="counterTitle">React Counter</h1>
      <div className="counterDiv">
      
      <ButtonLess counter={counter} setCounter={setCounter} />
      <span className="counterText">{counter}</span>
      <ButtonPlus counter={counter} setCounter={setCounter} />
      </div>
    
      <div className="buttonReset">
        <ButtonReset counter={counter} setCounter={setCounter} />
      </div>
      

    </div>
  );
};

export default App;
