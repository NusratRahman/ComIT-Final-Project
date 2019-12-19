import React from 'react';
import { Link } from 'react-router-dom';

function Intermediate3 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/intermediate4");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level2"> INTERMEDIATE </p>
            <h1 className = "display">3. What is the capital city of Manitoba? </h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) Regina </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Victoria </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> c) Winnipeg </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Intermediate3;