import { useEffect, useRef, useState } from "react";

const RegisterForm = () => {
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<any>({});
  const [count, setCount] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //let fname = document.getElementById("fname").value;
    //let lname = document.getElementById("lname").value;

    let user = { fname: "", lname: "" };

    let errors: any = { fname: {}, lname: {} };

    if (fnameRef.current) {
      if (fnameRef.current.value === "") {
        errors.fname["required"] = "failed";
      }
      if (fnameRef.current.value.length < 3) {
        errors.fname["minLength"] = "failed";
      }
      user.fname = fnameRef.current.value;
    }
    if (lnameRef.current) user.lname = lnameRef.current.value;

    setErrors(errors);
    console.log(user);
  };

  useEffect(() => {
    if (fnameRef.current) fnameRef.current.focus();
    setCount(count + 1);
    console.log(count);

    return () => {
      //do cleanup
    };
  }, []);

  return (
    <>
      <h2>Registration Form Using Ref</h2>
      <form className="col-6" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="fname">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="fname"
            name="fname"
            ref={fnameRef}
            required
            minLength={3}
          ></input>
          {errors?.fname?.required == "failed" && (
            <p className="text-danger">First name is required</p>
          )}
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
            ref={lnameRef}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default RegisterForm;
