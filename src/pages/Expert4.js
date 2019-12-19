import React from 'react';
import { Link } from 'react-router-dom';

function Expert4 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/expert5");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level3"> EXPERT </p>
            <h1 className = "display">4. The ‘Financial Times’ newspaper is printed on what color paper?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> a) Pink </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Off White </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) White </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Expert4;