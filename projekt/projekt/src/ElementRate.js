
import {  useState } from "react";
const axios = require('axios')





function ElementRate() {

    let x = window.location.pathname.slice(9)

    const [currSrc, setcurrSrc] = useState(['http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png']);

    const [currRate, setcurrRate] = useState(0)

    function changeSrc(n, arr = ['http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png',
        'http://cdn.onlinewebfonts.com/svg/img_323913.png']) {
        if (n === 0) {
            arr[n] = 'https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png'
            setcurrSrc(arr)
        }
        else {
            arr[n] = 'https://www.jing.fm/clipimg/full/112-1129671_clipart-boe-narodzenie-yellow-star-clipart.png'
            changeSrc(n - 1, arr)
        }
    }

    function submitRating() {
        console.log('http://localhost:5000/api/book/' + x + '/rate');
        axios.post('http://localhost:5000/api/book/' + x + '/rate', { score: currRate })
        window.location.href = window.location.pathname
    }


    return (
        <div>
            <div class="Form">
                <img alt = "" width="15" onClick={() => { changeSrc(0); setcurrRate(1) }} src={currSrc[0]}></img>
                <img alt = "" width="15" onClick={() => { changeSrc(1); setcurrRate(2) }} src={currSrc[1]}></img>
                <img alt = "" width="15" onClick={() => { changeSrc(2); setcurrRate(3) }} src={currSrc[2]}></img>
                <img alt = "" width="15" onClick={() => { changeSrc(3); setcurrRate(4) }} src={currSrc[3]}></img>
                <img alt = "" width="15" onClick={() => { changeSrc(4); setcurrRate(5) }} src={currSrc[4]}></img>

            </div>
            <button type="submit" onClick={() => { submitRating() }}>Oceń</button>
        </div>

    );
}

export default ElementRate;
