import React from 'react';
import { Link } from 'react-router-dom';

function CorrectAnswer (props) {
    
    function handleCounter () {
        props.setCounter (props.counter + 5);        
    }
    
    React.useEffect ( function() {
        handleCounter();        
    }, [] );
       
    return (
        
        <div>
            <div className = "correct">              
                <h1>👏 AWESOME !!</h1>                           
                <h2>Your current balance is:  {props.counter} COINS </h2>                     
            </div>        

            <footer className="next-page">
                <h3><Link to = {props.nextComponent} className = "remove-link">👉</Link></h3>                
            </footer> 
        </div>
    );
}

export default CorrectAnswer;