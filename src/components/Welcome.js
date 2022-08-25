import React from "react";
function Welcome({name}){
    console.log(name)
    return(
        <div>
           {name && <p>hello {name.email.split('@')[0]}</p>}
        </div>
        
    );
}
export default Welcome;