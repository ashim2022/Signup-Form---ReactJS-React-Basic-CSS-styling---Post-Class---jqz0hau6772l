import React,{useState} from "react";

function Form({getValues=()=>{}}) {
  const[name,setName]=useState("")
  const[nameError,setNameError]=useState(false)
  const[email,setEmail]=useState("")
  const[emailError,setEmailError]=useState(false)
  const[gender,setGender]=useState("male")
  const[genderError,setGenderError]=useState(false)
  const[phone,setPhone]=useState("")
  const[phoneError,setPhoneError]=useState(false)
  const[password,setPassword]=useState("")
  const[passwordError,setPasswordError]=useState(false)
  const [mendatroy, setMendatory] = useState(false);

  const handleSubmit = (e) => {
    e.persist()
    e.preventDefault();
    if(!name || !email || !phone || !gender || !password){
        setMendatory(true)
        getValues({})
        return;
    }else if(mendatroy){
      setMendatory(false)
    }
    if (!name.match(/^[\w\-\s]+$/)){
      setNameError(true)
      getValues({})
      return;
    }
    else if(nameError){
      setNameError(false)
    }
    if(!email.includes('@')){
      setEmailError(true)
      getValues({})
      return;
    }
    else if(emailError){
      setEmailError(false)
    }
    if(isNaN(Number(phone))){
      setPhoneError(true)
      getValues({})
      return
    }else if(phoneError){
      setPhoneError(false)
    }

    if(password.length<6){
      setPasswordError(true)
      getValues({})
      return;
    }
    else if(passwordError){
      setPasswordError(false)
    }
    // console.log([...e.target.elements])
    // const values = [...e.target.elements].map(ele =>({[ele.name]: ele.value})).filter(item => item !== '');
    const values={name,email,gender,phone,password}
    getValues(values)
  };



  return (
    <main>
      <form onSubmit={handleSubmit} >
        <label>
          Name
          <input onChange={(e)=> setName(e.target.value)} name="name" type="text" data-testid="name" />
        </label>
        {nameError&&<div>Name is not alphanumeric</div>}
        <br />
        <label>
          Email address
          <input onChange={(e)=> setEmail(e.target.value)} name="email"  data-testid="email" />
        </label>
        {emailError&&<div>Email must contain @</div>}
        <br />
        <label>
          Gender
          {/* <select type="text" /> */}
          <select value={gender} onChange={(e)=> setGender(e.target.value)} name="Gender" data-testid="gender">
            <option selected>male</option>
            <option>female</option>
            <option>other</option>
          </select>
        </label>
        <br />
        <label>
          Phone
          <input onChange={(e)=> setPhone(e.target.value)} name="phone" data-testid="phoneNumber" />
        </label>
        {phoneError&&<div>Phone Number must contain only numbers</div>}
        <br />
        <label>
          Password
          <input onChange={(e)=> setPassword(e.target.value)} name="password" type="Password" data-testid="password" />
        </label>
        {passwordError&&<div>Password must contain atleast 6 letters</div>}
        <br />
        {mendatroy&&<div> All fields are mandatory</div>}
        <button  role="submit" data-testid="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
export default Form;