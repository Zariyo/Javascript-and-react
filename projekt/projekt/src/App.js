import "./AppStyle.css"
import ElementList from "./ElementList";
import ElementDetails from "./ElementDetails.js";
import ElementForm from "./ElementForm.js"
import { Route, Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from "react";
import Popup from './Popup';
import './App.css';
const axios = require('axios')


function App() {


  let history = useHistory(0)

  const [ksiazki, setKsiazki] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/book/1')
      .then(response => setKsiazki(response.data))
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }





  return (
    <Router>
      <main>
        <div class="site">
          <div class="sidebar">On the side</div>

          <div class="right">
            <div class="Menu">
              <div class="Home_Link">
                <Link to="/">Home </Link>
              </div>

            </div>

            <Route exact path='/'>
              <div class="List">
                <ElementList />
              </div>
              <div class="Add_book_button">
                <input
                  class="addBook"
                  type="button"
                  value="Dodaj książkę"
                  onClick={togglePopup}
                />
                {isOpen && <Popup
                  content={<>
                    <div class="addBookText">Dodaj książkę</div>
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
