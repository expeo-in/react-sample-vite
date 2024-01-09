import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  firstName: string;
  age: number;
}

const schema = yup
  .object({
    firstName: yup.string().required("required"),
    age: yup
      .number()
      .positive("age should be greater than zero")
      .integer()
      .required("Age is required"),
  })
  .required();

export default function RegisterFormUsingYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="form-label" htmlFor="fname">
          First Name
        </label>
        <input
          id="firstName"
          {...register("firstName")}
          className="form-control"
        />
        <p className="text-danger">{errors.firstName?.message}</p>
      </div>

      <div>
        <label className="form-label" htmlFor="fname">
          Age
        </label>
        <input id="age" {...register("age")} className="form-control" />
        <p className="text-danger">{errors.age?.message}</p>
      </div>
      <input className="btn btn-primary" type="submit" />
    </form>
  );
}
