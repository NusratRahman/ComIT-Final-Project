import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


function Intermediate5 (props) {
        
    return (
        <div>
          
            <div className = "video-page">
                <br></br>
                <h1> Watch the video to answer the next question </h1>
            </div>
            
            <div className = "video">            
                <ReactPlayer url = 'https://www.youtube.com/watch?v=Nctps4PE8Ac' controls = {true} />
            </div>

            <footer className = "next-page-video">
                <h3><Link to = '/pages/intermediate6' className = "remove-link">👉</Link></h3>                
            </footer> 

        </div>                    
    );
}

export default Intermediate5;