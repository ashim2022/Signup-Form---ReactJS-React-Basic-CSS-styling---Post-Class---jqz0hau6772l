import React from "react";
function Form({getValues=()=>{}}) {
  const handleSubmit = (e) => {
    e.persist()
    e.preventDefault();
    console.log([...e.target.elements])
    const values = [...e.target.elements].map(ele =>({[ele.name]: ele.value})).filter(item => item !== '');
    getValues(values)
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" data-testid="name" />
        </label>
        <br />
        <label>
          Email address
          <input name="email" type="email" data-testid="email" />
        </label>
        <br />
        <label>
          Gender
          {/* <select type="text" /> */}
          <select name="Gender" data-testid="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <br />
        <label>
          Phone
          <input name="phone" type="tel" data-testid="phoneNumber" />
        </label>
        <br />
        <label>
          Password
          <input name="password" type="Password" data-testid="password" />
        </label>
        <br />
        <button  role="submit" data-testid="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
export default Form;
