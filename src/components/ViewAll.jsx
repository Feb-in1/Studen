import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

    const [data, changeData] = useState([])



const fetchData=()=>{
    axios.get("http://localhost:8080/ViewAll").then(
        (response)=>{
            console.log(response.data)
            changeData(response.data)
        }
    ).catch(
        (error)=>{
            console.log()
        }
    ).finally()
    
}
useEffect(() => { fetchData() }, [])
    return (
        <div>


            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">

                            {data.map(
                                (value, index) => {

                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                                        <div class="card">
                                            <img src="https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">Roll No: {value.rno}</p>
                                                <p class="card-text">Admn No: {value.admno}</p>
                                                <a href="#" class="btn btn-primary">Details</a>
                                            </div>
                                        </div>

                                    </div>
                                }

                            )



                            }




                        </div>
                    </div>


                </div>
            </div>
        </div>




    )
}

export default ViewAll