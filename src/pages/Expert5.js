import React from 'react';
import { Link } from 'react-router-dom';

function Expert5 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/last-page");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level3"> EXPERT </p>
            <h1 className = "display">5. Who is the director of the movie 'Titanic'?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> a) James Cameron </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Steven Spielberg </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) Peter Jackson </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Expert5;