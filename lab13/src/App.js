import PostsList from "./PostsList.js";
import PostDetails from "./PostDetails.js";
import logo from './logo.svg';
import {Route, Switch, Link, Redirect, useParams, useHistory} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {useState} from "react";
import './App.css';

function App() {
  return (
    <main>
      <Router>
      <div>
      
        <Link to="/">Home </Link>
        
        </div>
      
        <Route exact path='/'> 
          <PostsList/>
        </Route>
        <Route path="/details/">
          <PostDetails/>
        </Route>
        
      
      </Router>
      
    </main>
)

}

const Home = () => {

  // Wykorzystanie hooka useHistory

  return (
      <>
        <div>
        <h2>Home component</h2>
        </div>
      </>
  )
}


function Navbar() {
  return (
      <div>
        <Link to="/">Home </Link>
      </div>
  );
}



export default App;
