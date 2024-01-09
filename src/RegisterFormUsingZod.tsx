import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterFormUsingZod = () => {
  const schema = z.object({
    fname: z.string({
      required_error: "First Name is required",
      invalid_type_error: "First Name must be a string",
    }),
    lname: z.string(),
    age: z.number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    }),
  });

  type FormData = z.infer<typeof schema>;

  const formObject = useForm<FormData>({ resolver: zodResolver(schema) });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = formObject;

  const onFormSubmit = (data: FieldValues) => {
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
            {...register("fname")}
          ></input>
          {errors.fname && (
            <p className="text-danger">{errors.fname.message}</p>
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
            {...register("lname")}
          ></input>
          {errors.lname && (
            <p className="text-danger">{errors.lname.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="lname">
            Age
          </label>
          <input
            className="form-control"
            type="text"
            id="age"
            {...register("age", { valueAsNumber: true })}
          ></input>
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default RegisterFormUsingZod;
