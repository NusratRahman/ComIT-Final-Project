import React from 'react';
import { Link } from 'react-router-dom';

function Intermediate1 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/intermediate2");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level2"> INTERMEDIATE </p>
            <h1 className = "display">1. What is the color of 'M' in McDonald's?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) Red </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) White </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> c) Yellow </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Intermediate1;