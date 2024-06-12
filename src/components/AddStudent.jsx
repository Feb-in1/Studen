import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const[data,setData]=useState(
        {

            "name":"",
            "admno":"",
            "rno":"",
            "college":""

        }
    )

    const inputHandler=(event)=>{
setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post("http://localhost:8080/",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="Success"){
                    alert("Added Successfully")
                }
                else{
                    alert(response.data)

                }
            }
        ).catch(
            (error)=>{
                alert("Error")
            }
        )
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />



                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Admission Number</label>
                            <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Roll Number</label>
                        <input type="text" className="form-control" name='rno' value={data.rno} onChange={inputHandler}/>

                        </div>

                        {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                           <label htmlFor="" className="form-label">Parent Name</label>
                           <input type="text" className="form-control" /> 
                        </div> */}
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                        </div>

{/* 
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" />


                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Email id</label>
                        <input type="text" className="form-control" />

                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />

                        </div> */}
                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-success "onClick={readValue}>Register</button>

                        </div>
                        

                         
                    </div>



                </div>
            </div>
        </div>
        
        </div>
  )
}

export default AddStudent