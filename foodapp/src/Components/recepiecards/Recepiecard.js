import React from 'react';
import {Time,Group} from '../../assets';
import {Link} from 'react-router-dom';

function Recepiecard(props) {
    let {recepie} = props;
    return (
        <div className="recepiecard">
            <Link to= {{
                pathname:`/recepie/${recepie.id}`,
                state:{
                    hasDetails:true
                }
            }}>
           <img  src={recepie.image} alt={recepie.title}className="recepieimage"></img>
           <span className="recepiename">{recepie.title}</span>
           <div  className="recepieinfo">
               <Time/>
               <span>{recepie.readyInMinutes}</span>
               <Group/>
               <span>{recepie.servings}</span>
           </div>
           </Link>
        
        </div>
    );
}

export default Recepiecard
