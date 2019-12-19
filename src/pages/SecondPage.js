import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage (props) {

    function handleCounter () {
        props.setCounter (10);        
    }

    React.useEffect ( function() {
        handleCounter();               
    }, [] );
    
    return (
        
        <div>        

            <div className = "second-page">            
                <h1>Congratulations, {props.userName}!</h1>            
                <h2>Your account opening balance is: 10 COINS</h2>
                <h2> 😀 </h2>
            </div>

            <footer className = "next-page">
                <h3><Link to = '/pages/third-page' className = "remove-link">👉</Link></h3>                
            </footer>

        </div>
    );
}

export default SecondPage;