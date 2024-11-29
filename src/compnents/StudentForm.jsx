import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStudent } from "../Redux/userSlice";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const redirect =useNavigate()
  const {register,handleSubmit,formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  

  function regist(data) {
    dispatch(addStudent(data))
    alert("data inserted")
    redirect('/studentlist')
  }

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit(regist)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="form-control"
              id="name"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="rollNumber" className="form-label">
              Roll Number
            </label>
            <input
              {...register("rollNumber", {
                required: "Roll number is required",
              })}
              type="text"
              className="form-control"
              id="rollNumber"
            />
            {errors.rollNumber && (
              <p className="text-danger">{errors.rollNumber.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="className" className="form-label">
              Class
            </label>
            <input
              {...register("className", { required: "Class is required" })}
              type="text"
              className="form-control"
              id="rollNumber"
            />
            {errors.className && (
              <p className="text-danger">{errors.className.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Student
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
