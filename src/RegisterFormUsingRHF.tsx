import { useForm } from "react-hook-form";

interface FormData {
  fname: string;
  lname: string;
}

const RegisterFormUsingRHF = () => {
  const formObject = useForm<FormData>();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = formObject;

  const onFormSubmit = (data: FormData) => {
    console.log(formObject);
    console.log(data);
  };

  return (
    <>
      <h2>Registration Form Using React Hook Form</h2>
      <form className="col-6" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="fname">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            id="fname"
            {...register("fname", {
              required: true,
              minLength: 3,
              pattern: /^[a-zA-Z]+$/,
            })}
          ></input>
          <div>Only chars allowed and required</div>
          {errors?.fname?.type === "required" && (
            <p className="text-danger">First Name is required</p>
          )}
          {errors?.fname?.type === "minLength" && (
            <p className="text-danger">Minimum 3 chars</p>
          )}
          {errors?.fname?.type === "pattern" && (
            <p className="text-danger">Only chars</p>
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
            {...register("lname", { required: true, minLength: 5 })}
          ></input>
          {errors?.lname?.type === "required" && (
            <p className="text-danger">Last Name is required</p>
          )}
          {errors?.lname?.type === "minLength" && (
            <p className="text-danger">Minimum 5 chars</p>
          )}
        </div>
        <button className="btn btn-primary" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterFormUsingRHF;
