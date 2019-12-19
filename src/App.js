import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Beginner1 from './pages/Beginner1';
import Beginner2 from './pages/Beginner2';
import Beginner3 from './pages/Beginner3';
import Beginner4 from './pages/Beginner4';
import Beginner5 from './pages/Beginner5';
import Intermediate1 from './pages/Intermediate1';
import Intermediate2 from './pages/Intermediate2';
import Intermediate3 from './pages/Intermediate3';
import Intermediate4 from './pages/Intermediate4';
import Intermediate5 from './pages/Intermediate5';
import Intermediate6 from './pages/Intermediate6';
import Expert1 from './pages/Expert1';
import Expert2 from './pages/Expert2';
import Expert3 from './pages/Expert3';
import Expert4 from './pages/Expert4';
import Expert5 from './pages/Expert5';
import CorrectAnswer from './pages/CorrectAnswer';
import WrongAnswer from './pages/WrongAnswer';
import LastPage from './pages/LastPage';
import LevelChangeToIntermediate from './pages/LevelChangeToIntermediate';
import LevelChangeToExpert from './pages/LevelChangeToExpert';


function App() {

  let [name, setName] = React.useState ('');  
  let [counter, setCounter] = React.useState (10);
  let [nextComponent, setNextComponent] = React.useState ('/pages/beginner1');
  
  return (
    <BrowserRouter>   

      <div>     

        <Route path = "/" exact = {true}>  
          <WelcomePage name = {name} setName = {setName} />        
        </Route>
        
        <Route path = "/pages/second-page" exact = {true}>  
          <SecondPage userName = {name} counter = {counter} setCounter = {setCounter} />        
        </Route>

        <Route path = "/pages/third-page" exact = {true}>  
          <ThirdPage />        
        </Route>    

        <Route path = "/pages/beginner1" exact = {true}>  
          <Beginner1 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>      

        <Route path = "/pages/correct-answer" exact = {true}>  
          <CorrectAnswer counter = {counter} setCounter = {setCounter} nextComponent = {nextComponent} 
            setNextComponent = {setNextComponent} />                                       
        </Route>       
        
        <Route path = "/pages/beginner2" exact = {true}>  
          <Beginner2 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route> 

        <Route path = "/pages/wrong-answer" exact = {true}>  
          <WrongAnswer counter = {counter} setCounter = {setCounter} nextComponent = {nextComponent} />                                       
        </Route> 

        <Route path = "/pages/beginner3" exact = {true}>  
          <Beginner3 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route> 

        <Route path = "/pages/beginner4" exact = {true}>  
          <Beginner4 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route> 

        <Route path = "/pages/beginner5" exact = {true}>  
          <Beginner5 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>

        <Route path = "/pages/level-change-to-intermediate" exact = {true}>  
          <LevelChangeToIntermediate />        
        </Route>

        <Route path = "/pages/level-change-to-expert" exact = {true}>  
          <LevelChangeToExpert />        
        </Route> 

        <Route path = "/pages/intermediate1" exact = {true}>  
          <Intermediate1 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>

        <Route path = "/pages/intermediate2" exact = {true}>  
          <Intermediate2 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>

        <Route path = "/pages/intermediate3" exact = {true}>  
          <Intermediate3 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>

        <Route path = "/pages/intermediate4" exact = {true}>  
          <Intermediate4 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>

        <Route path = "/pages/intermediate5" exact = {true}>  
          <Intermediate5 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>

        <Route path = "/pages/intermediate6" exact = {true}>  
          <Intermediate6 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>

        <Route path = "/pages/expert1" exact = {true}>  
          <Expert1 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>  

        <Route path = "/pages/expert2" exact = {true}>  
          <Expert2 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route> 

        <Route path = "/pages/expert3" exact = {true}>  
          <Expert3 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>   

        <Route path = "/pages/expert4" exact = {true}>  
          <Expert4 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route>  

        <Route path = "/pages/expert5" exact = {true}>  
          <Expert5 nextComponent = {nextComponent} setNextComponent = {setNextComponent} />        
        </Route> 

        <Route path = "/pages/last-page" exact = {true}>  
          <LastPage counter = {counter} nextComponent = {nextComponent} setNextComponent = {setNextComponent} 
           userName = {name} />        
        </Route>          
        
      </div>    

    </BrowserRouter>    
  );
}

export default App;