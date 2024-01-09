import { useState } from "react";

const RegisterFormUsingState = () => {
  const [user, setUser] = useState({ fname: "", lname: "" });

  const handleChange = (e: any) => {
    let newUser = { ...user };

    if (e.target.id == "fname") newUser.fname = e.target.value;

    if (e.target.id == "lname") newUser.lname = e.target.value;

    setUser(newUser);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(user);
  };

  return (
    <>
      <h2>Registration Form Using State</h2>
      <form className="col-6" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="fname">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="fname"
            name="fname"
            value={user.fname}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lname">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            id="lname"
            name="lname"
            value={user.lname}
            onChange={handleChange}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default RegisterFormUsingState;
