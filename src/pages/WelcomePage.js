import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage (props) {
   
    function clearName () {
        props.setName ('');
    }
    React.useEffect ( function() {
        clearName();               
    }, [] );

    function handleName (event) {
        props.setName (event.currentTarget.value);
    }
    
    return (

        <div>

            <div className = "welcome-page">
                <h1>WELCOME!</h1>
                <h2> 😎 Please open your account to start the game 😎 </h2>     
                <label>Screen Name: </label>
                <input onChange = {handleName} value = {props.name} ></input>   
            </div>           

            <footer className = "next-page">
                <h3><Link to = '/pages/second-page' className = "remove-link">👉</Link></h3>                
            </footer> 
        
        </div>
    );
}

export default WelcomePage;