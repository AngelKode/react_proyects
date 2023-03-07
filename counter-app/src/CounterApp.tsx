import React, {useState} from "react";
import PropTypes from "prop-types";

interface CounterAppProps{
    value : number;
}

export const CounterApp = ({value} : CounterAppProps) => {

    const [counter, setCounter] = useState(value);

    const handleSubtract = () : void => {
        setCounter((prevState) => prevState - 1);
    }

    const handleAdd = () : void => {
        setCounter((prevState) => prevState + 1);
    }

    const handleReset = () : void => {
        setCounter(value);
    }

    return(
      <>
          <h1>Counter App</h1>
          <h2>Valor actual del contador: <mark>{ counter }</mark></h2>
          <div className="grid">
              <div>
                  <button className="outline"
                          onClick={handleSubtract}>-1</button>
              </div>
              <div>
                  <button className="secondary"
                          onClick={handleReset}>Reset</button>
              </div>
              <div>
                  <button className="contrast"
                          onClick={handleAdd}>+1</button>
              </div>
          </div>
      </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

