import React from 'react';
import { Link } from 'react-router-dom';

function Expert1 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/expert2");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level3"> EXPERT </p>
            <h1 className = "display">1. If you have 'arachnophobia', what are you afraid of?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) Needles </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Snakes </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> c) Spiders </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Expert1;