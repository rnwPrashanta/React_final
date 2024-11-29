import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers , Routes,Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import StudentForm from './compnents/StudentForm'
import StudentList from './compnents/StudentList'
import Studentdetails from './compnents/Studentdetails'
import UpdateStudent from './compnents/UpdateStudent'



const App = () => {
  return (
   <>
   <Routers>
    <Header/>
    <Routes>
      <Route path='/' element={<StudentForm/>}></Route>
      <Route path='/studentlist' element={<StudentList/>}></Route>
      <Route path='/studentdetails/:id' element={<Studentdetails/>}></Route>
      <Route path='/updatestudent/:id' element={<UpdateStudent />}></Route>
    </Routes>
    <Footer/>
   </Routers>
   </>
  )
}

export default App
