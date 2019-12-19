import React from 'react';
import { Link } from 'react-router-dom';

function Beginner2 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/beginner3");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level"> BEGINNER </p>
            <h1 className = "display">2. What is the French translation of 'Good Morning'?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) Bonne nuit! </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> b) Bonjour! </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) Bonne journée! </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Beginner2;