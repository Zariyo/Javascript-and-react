import { useEffect, useState } from "react";

let _ = require('lodash')
const axios = require('axios')




function ElementList() {

    const [books, setBooks] = useState([]);


    const [bookstemp, setBookstemp] = useState([]);

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionGatunek, setSelectedOptionGatunek] = useState(null);

    const options = ["Data wydania", "Alfabetycznie", "Ocena", "Brak"];

    let gatunki = ["Brak"]




    function setSorting(sort) {
        if (sort === "Brak") {
            setBookstemp(bookstemp)
        }
        else if (sort === "Data wydania") {
            setBookstemp(_.sortBy(bookstemp, ['release_date', 'title']))
        }
        else if (sort === "Alfabetycznie") {
            setBookstemp(_.sortBy(bookstemp, ['title', 'author']))
        }
        else if (sort === "Ocena") {
            setBookstemp(_.orderBy(bookstemp, ['rating'], ['desc']))
        }
    };

    function setGatunek(gatunek) {
        if (gatunek === null || gatunek === "Brak") { setBookstemp(books); setSelectedOption("Brak") }
        else {
            setBookstemp(_.filter(books, { 'genre': gatunek }))
            setSelectedOption("Brak")
        }
    };


    const [isOpen, setIsOpen] = useState(false);

    const [isOpenGatunki, setIsOpenGatunki] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    const togglingGatunki = () => setIsOpenGatunki(!isOpenGatunki);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        setSorting(value);
    };

    const onOptionClickedGatunek = value => () => {
        setSelectedOptionGatunek(value);
        setIsOpenGatunki(false);
        setGatunek(value);
    };

    useEffect(() => {
        axios.default.get("http://localhost:5000/api/book")
            .then(response => {
                setBooks(response.data)
                setBookstemp(response.data)
            })
    }, [])

    books.reduce((acc, curr, ind, arr) => {
        if (typeof curr['genre'] === 'string') {
            if (!(_.includes(gatunki, (curr['genre'])))) {
                gatunki.push(curr['genre'])
            }
        }
    }, [])



    function getRating(rating, src = ['http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png']) {
        if (rating === null) {
            return (
                <div class="starList">
                    <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
                    <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
                    <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
                    <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
                    <img alt = "" src="http://cdn.onlinewebfonts.com/svg/img_323913.png" width="15px"></img>
                </div>

            )
        } else {
            if (rating >= 1) { src[0] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
            if (rating >= 2) { src[1] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
            if (rating >= 3) { src[2] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
            if (rating >= 4) { src[3] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
            if (rating >= 5) { src[4] = "https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png" }
            return (
                <div class="starList">
                    <img alt = "" width="15" src={src[0]}></img>
                    <img alt = "" width="15" src={src[1]}></img>
                    <img alt = "" width="15" src={src[2]}></img>
                    <img alt = "" width="15" src={src[3]}></img>
                    <img alt = "" width="15" src={src[4]}></img>
                </div>
            )
        }
    }

    function GetImage(item) {
        if (item.image_url == null) {
            return "https://ravenspacepublishing.org/wp-content/uploads/2019/04/default-book.jpg"
        }
        else return item.image_url
    }


    //https://ravenspacepublishing.org/wp-content/uploads/2019/04/default-book.jpg



    return (
        <>

            <div class="ElementList">
                <div class="Filtry">
                    <div class="Sortowanie">
                        <div class="FilterContainer">
                            <div onClick={toggling} class="FilterHeader">Sortowanie: {selectedOption || "Brak"}</div>
                            {isOpen && (
                                <div class="FilterListContainer">
                                    <ul class="FilterList">
                                        {options.map(option => (
                                            <li class="listitem" key={option} onClick={onOptionClicked(option)} >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="Gatunki">
                        <div class="FilterContainer">
                            <div onClick={togglingGatunki} class="FilterHeader">Gatunek: {selectedOptionGatunek || "Brak"}</div>
                            {isOpenGatunki && (
                                <div class="FilterListContainer">
                                    <ul class="FilterList">
                                        {gatunki.map(option => (
                                            <li class="listitem" key={option} onClick={onOptionClickedGatunek(option)} >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div></div>

                </div>
                <div class="booksList">{bookstemp.map(item => (
                    <div class={"item item-" + item.id}>
                        <div><a href={"/details/" + item.id} name="listItem" ><img alt = "" width="150" height="200" alt="" src={GetImage(item)}></img></a></div>
                        <a href={"/details/" + item.id} name="listItem" ><div>{item.title}</div></a>
                        <div>{getRating(item.rating)}</div>
                    </div>
                ))}</div></div>

        </>
    )


}



export default ElementList;