import React,{useState} from 'react';
import Header from './Components/header/Header';
import Recepiecardwrapper from './Components/recepiecards/Recepiecardwrapper';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';
import RecepieDetails from './Components/RecepieDetails/RecepieDetails';



function App() {
  const [recepie,setRecepie]=useState(null)
  let onRecepieSelect=(recepie)=>{
   setRecepie(recepie)
  }
  return (
    <Router>
    <div>
  <Header onRecepieSelect={onRecepieSelect}></Header>
  <Recepiecardwrapper selectedRecepie={recepie}/>
  <Switch>
    <Route path="/recepie/:recepieID">
      <RecepieDetails/>
    </Route>
  </Switch>
  </div>
  </Router>
  );
}

export default App;
