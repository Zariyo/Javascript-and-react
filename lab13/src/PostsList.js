import {useEffect, useState} from "react";
import {Route, Switch, Link, Redirect, useParams, useHistory} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
const axios = require('axios')




function PostsList(){

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.default.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setComments(response.data))
})








return (
    <>
        <div>kox</div>
        <Router>
      <Switch>
      <div>{comments.map( item => (<a href={"/details/" + item.id} name = "listItem" ><div><span>{item.id}</span></div></a>))}</div>
      </Switch>
      </Router>
        
        <div>123</div>
    </>
)


}



export default PostsList;