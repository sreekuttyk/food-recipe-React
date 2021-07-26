import React from 'react';
import "./RecepieDetails.css";
import {useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import sampleData from './sampleDetails.json';
import Ingredients from './Ingredients';
const API_KEY = 'b27d3f68f73d4064b0bf86cea1ded400'


function RecepieDetails(props) {
  
    let {recepieID}=useParams();
    const [details,setDetails]=useState({})
    useEffect(()=>{
    
        
        fetchRecepieInformation();
        },[recepieID]);
        console.log(recepieID)
        let fetchRecepieInformation=async()=>{
           let response=await fetch(`https://api.spoonacular.com/recipes/${recepieID}/information?apiKey=${API_KEY}`)
            let recepieInfoData= await response.json()
            //console.log(recepieInfoData)
            setDetails(recepieInfoData)
            
        }
    return (
        
        <div className="recepieDetails">
            <Link to="/">
            <div className="recepieDetailsClose">X</div>
            </Link>
            {/*header*/}
            <div style={{backgroundImage:`url(${details.image})`,
            height:'200px',
            objectFit:'cover',
            position:'relative'
        }}>
            <span className="recepieTitle">{details.title}</span>

            </div>
            <div style={{height:'calc(100% - 200px)',
        overflow:'auto'}}>
            {/*summary*/}
            <p className="recepieSummary"dangerouslySetInnerHTML={{__html:details.summary}}></p>
            {/*ingredients*/}
            <Ingredients  ingredients={details.extendedIngredients || []}/>
            {/*instructions*/}
            <p className="recepieSummary">{details.instructions}</p>
            </div>
        </div>
    )

}

export default RecepieDetails
