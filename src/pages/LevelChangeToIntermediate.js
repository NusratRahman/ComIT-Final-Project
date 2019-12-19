import React from 'react';
import { Link } from 'react-router-dom';

function LevelChangeToIntermediate () {
    
    return (
        
        <div>        

            <div className = "second-page">            
                <h1> WooHoo !! </h1>                       
                <h2> You entered into the higher level </h2>
                <h2> 🤗 </h2>
            </div>

            <footer className = "next-page">
                <h3><Link to = '/pages/intermediate1' className = "remove-link">👉</Link></h3>                
            </footer>

        </div>
    );
}

export default LevelChangeToIntermediate;