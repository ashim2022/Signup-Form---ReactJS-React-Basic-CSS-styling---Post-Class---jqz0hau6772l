import React from "react";
function Welcome({formValues}){
    console.log(formValues)
    const {email,name, phone, password, gender}=formValues
    const abc = email && name && phone && password && gender
    return(
        <div>
           {abc && <p>hello {email.split('@')[0]}</p>}
        </div>
        
    );
}
export default Welcome;