import React from 'react';
import { Link } from 'react-router-dom';

function Beginner3 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/beginner4");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level"> BEGINNER </p>
            <h1 className = "display">3. How many sides does an isosceles triangle have?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> a) 2 </Link>  </li>             
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> b) 3 </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) 4 </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Beginner3;