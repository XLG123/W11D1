import { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneType: "",
    staff: "",
    bio: "",
    subscription: "",
  });

  const handleChange = (field) => {
    return (e) => {
      const newUser = Object.assign({}, user, {[field]: e.target.value});
      setUser(newUser);
    } 
  }

  const [time, setTime] = useState({});

  const [errors, setErrors] = useState([]);

  const validates = () => {
    let errors = [];
    if (user.name.length === 0) {
      errors.push("Name is required.");
    }

    if (user.email.length === 0 || !user.email.includes("@")) {
      errors.push("Email is required and should be properly formated.");
    }

    if (user.phoneNumber && (user.phoneNumber.length < 9 || user.phoneNumber.length > 10)) {
      errors.push("Phone number provided is not valid.");
    }
    
    if (user.phoneNumber && user.phoneType === "") {
      errors.push("Phone type is not selected.");
    }

    if (user.bio.length > 280) {
      errors.push("Bio is longer than 280 characters.");
    }
    return errors;
  }
 
  const submitHandler = (e) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    setTime({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }) 

    e.preventDefault();
    const errors = validates(); 
    setErrors(errors);
  }

  return (
    <>
      {time && 
        <h2>{time.hours} : {time.minutes} : {time.seconds} </h2>
      }
      
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>

      <form action="" onSubmit={submitHandler}>
        <label>Name
          <input type="text" onChange={handleChange("name")}/>
        </label>

        <br />

        <label>Email
          <input type="email" onChange={handleChange("email")}/>
        </label>

        <br />
        <label>Phone Number
          <input type="number" onChange={handleChange("phoneNumber")}/>
        </label>

        <br />
        <label>Phone Type
          <select name="phone-type" value={user.phoneType} onChange={handleChange("phoneType")}>
            <option value=""></option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="mobile">Mobile</option>
          </select>
        </label>

        <br />

        <label>Instructor
          <input type="radio" name="staff" value="instructor" onChange={handleChange("staff")}/>
        </label>

        <label>Student
          <input type="radio" name="staff" value="student" onChange={handleChange("staff")}/>
        </label>

        <br />

        <label>Bio
          <textarea name="Bio" cols="30" rows="10" onChange={handleChange("bio")}></textarea>
        </label>

        <br />
        
        <label>
          Sign up for email notifications
          <input type="checkbox" onChange={handleChange("subscription")}/>
        </label>

        <br />

        <button>Submit</button>

      </form>

      {/* <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.phoneNumber}</h2>
      <h2>{user.phoneType}</h2>
      <h2>{user.staff}</h2>
      <h2>{user.bio}</h2>
      <h2>{user.subscription}</h2> */}
    </>
  );
}

export default Form;