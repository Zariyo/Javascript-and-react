import Popup from './Popup';
import ElementRate from './ElementRate'
import UpdateElementForm from './UpdateElementForm'
import React, { useEffect, useState } from "react";
import {  useHistory } from 'react-router-dom';

const axios = require('axios')


function ElementDetails() {

  let x = window.location.pathname.slice(9)

  let history = useHistory(0)

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.default.get("http://localhost:5000/api/book/" + x)
      .then(response => setBooks(response.data))
  }, [])


  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRate, setIsOpenRate] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const toggleRatePopup = () => {
    setIsOpenRate(!isOpenRate);
  }
  const togglePopupDelete = () => {
    setIsOpenDelete(!isOpenDelete);
  }

  const [currSrc] = useState(['http://cdn.onlinewebfonts.com/svg/img_323913.png',
    'http://cdn.onlinewebfonts.com/svg/img_323913.png',
    'http://cdn.onlinewebfonts.com/svg/img_323913.png',
    'http://cdn.onlinewebfonts.com/svg/img_323913.png',
    'http://cdn.onlinewebfonts.com/svg/img_323913.png']);

  useEffect(() => {
    if (books.rating >= 1) { currSrc[0] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
    if (books.rating >= 2) { currSrc[1] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
    if (books.rating >= 3) { currSrc[2] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
    if (books.rating >= 4) { currSrc[3] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
    if (books.rating >= 5) { currSrc[4] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
  })

  //https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png
  function getRating(rating) {
    if (rating == null) {
      return (
        <div>
          <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
          <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
          <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
          <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
          <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
        </div>

      )
    } else {
      return (
        <div>
          <img alt = "" width="15" src={currSrc[0]}></img>
          <img alt = "" width="15" src={currSrc[1]}></img>
          <img alt = "" width="15" src={currSrc[2]}></img>
          <img alt = "" width="15" src={currSrc[3]}></img>
          <img alt = "" width="15" src={currSrc[4]}></img>
        </div>
      )
    }
  }

  function getImage(item) {
    if (item.image_url == null) {
      return "https://ravenspacepublishing.org/wp-content/uploads/2019/04/default-book.jpg"
    }
    else return item.image_url
  }

  function deleteItem() {
    axios.delete('http://localhost:5000/api/book/' + x)
    window.location.href = '/'
  }


  return (
    <>
      <div className="Edit_book_button">
        <input
          className="addBook"
          type="button"
          value="Edytuj"
          onClick={togglePopup}
        />
        {isOpen && <Popup
          content={<>
            <div className="addBookText">Edytuj</div>
            <UpdateElementForm />
          </>}
          handleClose={togglePopup}
        />}


      </div>
      <div className="BookDetails">
        <div className="BookDetailsTitle">{books.title}</div>
        <div className="BookDetailsAuthor">{books.author}</div>
        <div className="BookDetailsPicture"><img src={getImage(books)}></img></div>
        <div className="BookDetailsGenre">Gatunek: {books.genre}</div>
        <div className="BookDetailsRating">{getRating(books.rating)}</div>
        <div className="Rate_book_button">
          <input
            className="rateBook"
            type="button"
            value="Oceń"
            onClick={toggleRatePopup}
          />
          {isOpenRate && <Popup
            content={<>
              <div className="addBookText">Oceniasz</div>
              <ElementRate />
            </>}
            handleClose={toggleRatePopup}
          />}


        </div>
        <div className="BookDetailsDescription">{books.description}</div>
      </div>
      <div className="Back"><button onClick={() => history.goBack()}>Wróć</button></div>
      <div className="Delete_book_button">
        <input
          className="delBook"
          type="button"
          value="Usuń"
          onClick={deleteItem}
        />
        {isOpenDelete && <Popup
          content={<>
            <div className="addBookText">Usuń</div>
          </>}
          handleClose={togglePopupDelete}
        />}


      </div>

    </>
  )



}

export default ElementDetails;