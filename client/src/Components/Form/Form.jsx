import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = ({ fields, title, children, btnValue }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex-col bg-blue'>
      <h2>{title}</h2>
      {fields.map((field) => {
        return (
          <div>
            <label className=''>{field}</label>
            <input
              defaultValue=''
              {...register(`${field}`, { required: true })}
              placeholder=''
            />
          </div>
        );
      })}
      {errors.exampleRequired && <span>This field is required</span>}
      {children}
      <input type='submit' value={btnValue} />
    </form>
  );
};

export default Form;
