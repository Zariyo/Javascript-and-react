import logo from './logo.svg';
import './App.css';
import { Children } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lorem ipsum dolor sit amet
        </a>
      </header>
    </div>
  );
}

let wypisz = "Lorem ipsum"

function About() {
  return (
    <div className = "About">
  <h5>Lorem ipsum</h5>
  <p>{wypisz}</p>
  <button onClick={()=>{
    alert("Zostalem klikniety");}}>Kliknij tutaj!</button>
    <div>    
      <input type="text" name="tekstboks" />
      <button onClick={()=>{
        console.log("123");
      }}>Zapisz</button>
    </div>
  </div>
  );
}

export default About;


// Zad 1
//  function App() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Lorem ipsum dolor sit amet
//          </a>
//        </header>
//      </div>
//    );
//  }

// Zad 2
//  function About() {
//    return (
//      <div className = "About">
//    <h5>Lorem ipsum</h5>
//    </div>
//    );
//  }


// Zad 3
//  let wypisz = "Lorem ipsum"
//  
//  function About() {
//    return (
//      <div className = "About">
//    <h5>Lorem ipsum</h5>
//    <p>{wypisz}</p>
//    </div>
//    );
//  }

// Zad 4
//  function About() {
//    return (
//      <div className = "About">
//    <h5>Lorem ipsum</h5>
//    <p>{wypisz}</p>
//    <button onClick={()=>{
//      alert("Zostalem klikniety");}}>Kliknij tutaj!</button>
//    </div>
//    );
//  }