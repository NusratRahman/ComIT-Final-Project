import React from 'react';
import { Link } from 'react-router-dom';

function Expert2 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/expert3");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level3"> EXPERT </p>
            <h1 className = "display">2. What is the number of provinces in Canada?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) 8 </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> b) 10 </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) 12 </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Expert2;