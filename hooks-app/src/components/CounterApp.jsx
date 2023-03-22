import {useState} from "react";

export const CounterApp = () => {

    const [{counter1,counter2,counter3}, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30
    });
    

    return (
        <>
          <h1>Counter1 Value : {counter1}</h1>
          <h1>Counter2 Value : {counter2}</h1>
          <h1>Counter3 Value : {counter3}</h1>
          <button className='outline'
                  type='button'
                  onClick={() => setCounter((counters) => {
                      return {
                          ...counters,
                          counter1 : counters?.counter1 + 1,
                      }
                  })}>
              Add
          </button>
        </>
    )
}