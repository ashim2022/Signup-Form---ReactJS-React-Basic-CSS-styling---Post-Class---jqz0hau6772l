import React from "react";
function Welcome({formValues}){
    console.log(formValues)
    const {email,name, phone, password, gender}=formValues
    return(
        <div>
           {email && <p>hello {email.split('@')[0]}</p>}
        </div>
        
    );
}
export default Welcome;