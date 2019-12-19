import React from 'react';
import { Link } from 'react-router-dom';


function Intermediate6 (props) {
    
    function handleNextComponent () {
        props.setNextComponent ("/pages/level-change-to-expert");
    }
    
    React.useEffect ( function() {
        handleNextComponent();        
    }, [] );
    
    return (
        <div>          
            <p className = "level2"> INTERMEDIATE </p>
            <h1 className = "display">5. What is the name of the character of Jerry's special friend in the video?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> a) Spike </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Tuffy </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) Quacker </Link>  </li>
            </ul>
        </div>                           
    );
}

export default Intermediate6;