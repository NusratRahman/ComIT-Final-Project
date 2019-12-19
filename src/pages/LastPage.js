import React from 'react';
import { Link } from 'react-router-dom';

function LastPage (props) {

    function handleNextComponent () {
        props.setNextComponent ("/");
    }
    
    React.useEffect ( function() {
        handleNextComponent();
    }, [] );
    
    return (
        <div>
            
            { props.counter <= 10 ? 
                <div className = "second-page">            
                    <h1>No Worries, {props.userName}! 🤓 You can try AGAIN!</h1>
                    <h2>Your account closing balance is: {props.counter} COINS</h2>                                           
                </div> :
                <div className = "second-page">            
                    <h1> 👍 CONGRATULATIONS, {props.userName} !! 👍</h1>
                    <h2>Your account closing balance is: {props.counter} COINS</h2>
                    <h2> 🥳 </h2>                                 
                </div>       
            }                              

            <footer className = "last-page">
                <h3><Link to = '/' className = "remove-link">END GAME</Link></h3>                
            </footer>

        </div>
    );
}

export default LastPage;