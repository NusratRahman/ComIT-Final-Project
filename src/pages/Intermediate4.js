import React from 'react';
import { Link } from 'react-router-dom';

function Intermediate4 (props) {

    function handleNextComponent () {
        props.setNextComponent ("/pages/intermediate5");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>            
            <p className = "level2"> INTERMEDIATE </p>
            <h1 className = "display">4. Which pair of superheroes are known as the ‘Dynamic Duo’?</h1>
            <ul className = "remove-bullets"> 
                <li> <Link to = "/pages/correct-answer" className = "remove-link2"> a) Batman and Robin </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> b) Spiderman and Ironman </Link>  </li>             
                <li> <Link to = "/pages/wrong-answer" className = "remove-link2"> c) Superman and Wonder Woman </Link>  </li>
            </ul>                           
        </div>        
    );
}

export default Intermediate4;