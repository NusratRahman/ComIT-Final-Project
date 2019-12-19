import React from 'react';
import { Link } from 'react-router-dom';

function WrongAnswer (props) {
     
    function handleCounter () {
        props.setCounter (props.counter - 2);        
    }

    function componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }
    
    React.useEffect ( function() {
        handleCounter();    
        componentDidMount();    
    }, [] );
   
    return (

        <div>  

            <div>
                <audio className = "audio-element">
                    <source src = "https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
                </audio>
            </div>

            <div className = "wrong">              
                <h1> 🙃 Oops !! Wrong Answer ! </h1>
                <h2> You lost 2 COINS ! ☹️ </h2>                           
                <h2>Your current balance is:  {props.counter} COINS </h2>                     
            </div>        

            <footer className = "next-page">
                <h3><Link to = {props.nextComponent} className = "remove-link">👉</Link></h3>                
            </footer>     
                       
        </div>        
    );
}

export default WrongAnswer;