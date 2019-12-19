import React from 'react';
import { Link } from 'react-router-dom';

function Beginner4 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/beginner5");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level"> BEGINNER </p>
            <div>
                <h1 className = "display">4. Complete the title of the play by Shakespeare – </h1>
                <h1 className = "display4">'The Merchant of ________ '?</h1>
            </div>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> a) Venice </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Spain </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) Greece </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Beginner4;