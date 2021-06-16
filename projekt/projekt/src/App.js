import "./AppStyle.css"
import ElementList from "./ElementList";
import ElementDetails from "./ElementDetails.js";
import ElementForm from "./ElementForm.js"
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from "react";
import Popup from './Popup';
import './App.css';
//const axios = require('axios')


function App() {



  //const [ksiazki, setKsiazki] = useState([]);
//
//
  //useEffect(() => {
  //  axios.get('http://localhost:5000/api/book/1')
  //    .then(response => setKsiazki(response.data))
  //}, [])

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }





  return (
    <Router>
      <main>
        <div className="site">
          <div className="sidebar">On the side</div>

          <div className="right">
            <div className="Menu">
              <div className="Home_Link">
                <Link to="/">Home </Link>
              </div>

            </div>

            <Route exact path='/'>
              <div className="List">
                <ElementList />
              </div>
              <div className="Add_book_button">
                <input
                  className="addBook"
                  type="button"
                  value="Dodaj książkę"
                  onClick={togglePopup}
                />
                {isOpen && <Popup
                  content={<>
                    <div className="addBookText">Dodaj książkę</div>
                    <ElementForm />
                  </>}
                  handleClose={togglePopup}
                />}


              </div>
            </Route>
            <Route path="/details/">
              <ElementDetails />
            </Route>
          </div>





        </div>
      </main>
    </Router>
  );

}

export default App;
