import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStudent = () => {
  const { studentList } = useSelector((state) => state.students)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { id } = useParams() 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const studentDetails = studentList.find((student) => student.id === id) 
    if (studentDetails) {
      reset(studentDetails) 
    }
  }, [id, studentList, reset]) /

  function onSubmit(data) {
 
    dispatch(edituser(data))
    navigate('/viewstudent')
    alert("Student details updated successfully!")
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Student</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="form-control"
            id="name"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="rollNumber" className="form-label">Roll Number</label>
          <input
            {...register("rollNumber", { required: "Roll number is required" })}
            type="text"
            className="form-control"
            id="rollNumber"
          />
          {errors.rollNumber && <p className="text-danger">{errors.rollNumber.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="className" className="form-label">Class</label>
          <input
            {...register("className", { required: "Class is required" })}
            type="text"
            className="form-control"
            id="className"
          />
          {errors.className && <p className="text-danger">{errors.className.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Update</button>
      </form>
    </div>
  )
}

export default UpdateStudent
