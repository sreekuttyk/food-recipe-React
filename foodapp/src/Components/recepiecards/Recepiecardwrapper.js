import React,{useEffect,useState} from 'react';
import Recepiecard from './Recepiecard';
import "./Recepiecard.css";
import {useLocation} from 'react-router-dom';
const API_KEY = 'b27d3f68f73d4064b0bf86cea1ded400'

function Recepiecardwrapper(props) {
    let urlState=useLocation().state;
    const [recepies,setRecepies]=useState([])
    
    useEffect(()=>{
    
    if(props.selectedRecepie)
    fetchRecepie()
    },[props.selectedRecepie]);
    let fetchRecepie=async()=>{
        let response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedRecepie}&addRecipeInformation=true&number=8`)
        let recepieData= await response.json()
        setRecepies(recepieData.results)
        console.log(recepieData)
    }
    return (
        <div className="recepiewrapper" style={{width:urlState && urlState.hasDetails ? '60%':'100%'}}>
            {
                recepies.map(recepie=><Recepiecard key={recepie.id} recepie={recepie}/> )
            }
           
        </div>
    )
}

export default Recepiecardwrapper
