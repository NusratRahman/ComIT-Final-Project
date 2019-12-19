import React from 'react';
import { Link } from 'react-router-dom';


function ThirdPage () {       
        
    return (
        
        <div className = "third-page">               
            <h1>Please select the level : </h1>   
                <ul> 
                    <li> <Link to = "/pages/beginner1" className = "remove-link"> 🙂  Beginner </Link>  </li>             
                    <li> <Link to = "/pages/intermediate1" className = "remove-link"> 😄  Intermediate </Link>  </li>             
                    <li> <Link to = "/pages/expert1" className = "remove-link"> 😁  Expert </Link>  </li>
                </ul>
        </div>        
    );
}

export default ThirdPage;