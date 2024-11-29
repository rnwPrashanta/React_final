import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";
import StudentList from "../compnents/StudentList";
import axios from "axios"; 
const studentURL="http://localhost:5000/students"
export const addStudent=createAsyncThunk("students/addstudents",async(data)=>{
    const res=await axios.post(studentURL,data)
    return res.data
})

export const viewStudent = createAsyncThunk("students/viewstudents",async()=>{
    const res = await axios.get(API_URL)
    return res.data
})

export const deleteStudent = createAsyncThunk("students/deletestudents",async(id)=>{
    const res = await axios.delete(`${API_URL}/${id}`)
    console.log(res.data.id)
    return res.data.id
})
export const editstudent = createAsyncThunk("/students/editstudents",async(data)=>{
    const { id } = data;
    const res = await axios.put(`${API_URL}/${id}`, data)
    return res.data
})

const userSlice=createSlice({
    name:"students",
    initialState:{
        StudentList:[]
    }
    ,extraReducers:(builder)=>{
        builder.addCase(addStudent.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.StudentList.push(action.payload)
            
        })
        .addCase(viewStudent.fulfilled,(state,action)=>{
            state.StudentList = action.payload
        })
        .addCase(deleteStudent.fulfilled,(state,action)=>{
            const filterData = state.userList.filter((students)=>{
                return students.id!==action.payload
            })
            state.StudentList  = filterData
        })
        .addCase(editstudent.fulfilled, (state, action) => {
            const { id } = action.payload
            console.log("id.............");
            console.log(id)
            const indexno = state.studentList.findIndex((students) => {
                return students.id == id
            })
            if (indexno != -1) {
                state.studentList[indexno] = action.payload
            }

        })
        
    }
})
export default userSlice.reducer