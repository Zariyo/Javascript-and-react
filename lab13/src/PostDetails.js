import {useEffect, useState} from "react";
import {Route, Switch, Link, Redirect, useParams, useHistory} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
const axios = require('axios')


function PostDetails(){

    let x = window.location.pathname.slice(9)

    let history = useHistory(0)

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.default.get("https://jsonplaceholder.typicode.com/posts/" + x)
        .then(response => setComments(response.data))
    })


    
    

return (
    <>
        <div>
            tytul: {comments.title}
        </div>
        <div>id: {x}</div>
        <div><button onClick={() => history.goBack()}>Wroc</button></div>
    </>
)



}

export default PostDetails;