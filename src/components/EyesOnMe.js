// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handleFocus(){
        console.log('Good!')
    }
    function hanldeBlur(){
        console.log('Hey! Eyes on me!')
    }
    return <div>
            <button onBlur={hanldeBlur} onFocus={handleFocus}>'Eyes on me'</button>
        </div>
}

export default EyesOnMe;