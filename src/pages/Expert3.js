import React from 'react';
import { Link } from 'react-router-dom';

function Expert3 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/expert4");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level3"> EXPERT </p>
            <h1 className = "display">3. What does the ‘MI’ in ‘MI6’ stand for?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> a) Military Intelligence </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Mission Impossible </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) Management Information </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Expert3;