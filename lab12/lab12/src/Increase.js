import {useState} from "react";

function Increase() {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    const [tryNumber, setNumber] = useState(0)
    const randNumber = getRandomInt(10, 51)
    const [state, setState] = useState("")

    const increaseBy1 = () => {
        setNumber(tryNumber+1)
        tryState()
    }

    const increaseBy5 = () => {
        setNumber(tryNumber+5)
        tryState()
    }

    const tryState = () =>{
        if (tryNumber<randNumber) {setState("za malo")}
        if (tryNumber===randNumber) {setState("idealnie")}
        if (tryNumber>randNumber) {setState("za duzo")}
    }


    return (
        <div>
          <h2>Welcome to Incremental Guessing</h2>
          <div>Current number: {tryNumber}</div>
          <br></br>
          <div>Current state: {state}</div>
          <div><button onClick={increaseBy1}>Increase by 1 </button></div>
          <br></br>
          <div><button onClick={increaseBy5}>Increase by 5 </button></div>
        </div>
    )
}

export default Increase;