import React from 'react';
import { Link } from 'react-router-dom';

function Beginner1 (props) {
    
    function handleNextComponent () {
        props.setNextComponent ("/pages/beginner2");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );

    return (
        <div>            
            <p className = "level"> BEGINNER </p>
            <h1 className = "display">1. What is your favourite color?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> a) Green </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> b) Blue </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> c) Yellow </Link>  </li>
            </ul>                                      
        </div>        
    );
}

export default Beginner1;