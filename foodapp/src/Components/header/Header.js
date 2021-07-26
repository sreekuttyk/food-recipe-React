import React from 'react';
import "./Header.css";
let Header = (props)=>{
    
    return(
        <div className="header">
            <span className="logo">Tell Me Recepies</span>
            <nav>
                <button onClick={e=>props.onRecepieSelect('Indian')}>Indian</button>
                <button onClick={e=>props.onRecepieSelect('Italian')}>Italian</button>

            </nav>
        </div>
    )

}
export default Header;