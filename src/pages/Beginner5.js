import React from 'react';
import { Link } from 'react-router-dom';

function Beginner5 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/level-change-to-intermediate");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level"> BEGINNER </p>
            <h1 className = "display">5. In TV series 'F.R.I.E.N.D.S', how many friends were there?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) 5 </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> b) 6 </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) 7 </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Beginner5;