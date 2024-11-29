import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, viewStudent  } from "../Redux/userSlice";
import { NavLink } from "react-router-dom";

const StudentList = () => {
  const dispatch = useDispatch();

  const { StudentList } = useSelector((state) => state.students);
  console.log(StudentList);
  useEffect(() => {
    dispatch(viewStudent());
  }, [dispatch]);

  function trash(id){
    dispatch(deleteStudent(id))
    alert("delete.....")
  }
  return (
    <div>
      <table className="table table-stripend table-hover table-success table-bordered">
        <thead>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>RollNo</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {StudentList && StudentList.map ((students, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{students.name}</td>
                  <td>{students.rollNumber}</td>
                  <td>{students.className}</td>
                  <td><NavLink>
                    <button className="btn btn-danger mx-2"
                    onClick={() => trash(students.id)}> delete</button>
                  </NavLink></td>
                </tr>
                
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
