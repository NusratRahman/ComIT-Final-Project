import React from 'react';
import { Link } from 'react-router-dom';

function Intermediate2 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/intermediate3");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level2"> INTERMEDIATE </p>
            <h1 className = "display">2. Shawn Mendes is the name of a/an _____?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) Actor </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> b) Singer </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) Comedian </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Intermediate2;