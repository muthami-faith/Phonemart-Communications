import axios from "axios";
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin=()=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const navigate=useNavigate("")

    //function to handle on submit from
    const submit=async(e)=>{
        //prevent normal behaviour of reloading once the submit button has been clicked
        e.preventDefault()
        //update our loading hook
        setLoading("Please wait as we log you in")
        try {
            //create our FormData
            const data=new FormData()
            data.append("email",email)
            data.append("password",password)

            //send data to the endpoint
            //using axios we can access different request methods
            //async allows to await the api response first before proceeding the other lines of code
            const response=await axios.post("https://ninjafaith.pythonanywhere.com/api/signin",data)

            //we make a decision based on if the response will have a user key
            //all responses will have  a message key back
            //but the one with the right credentials will have bot message and user key
            if (response.data.user){
                //if user is found, store user details in local storage
                localStorage.setItem("user",JSON.stringify(response.data.user))
                if (password === "Phonemart@3"){
                     navigate("/productinput")
                }else {
                //after successfull login navigate to get product component using "/" path
                setTimeout(()=>navigate("/"),2000)
                    
                }
                
    
            }else{
                //we clear the loading hook and update the error hook
                setLoading("")
                setError(response.data.message)
            }
                

            
        } catch (error) {
            //clear the loading hook
            //update the errror hook with the error that is causing the signin to fail
            //basiscally we catchh the errror that might occur in the process that we ahd not anticipated
            setLoading("")
            setError(error.message)
        }
    }

    return(
        <div className="row justify-content-center mt-4 mb-5 container-fluid ms-1">
            <div className="card shadow-lg p-4 col-md-4 bg-dark text-light rounded-4">
                <form onSubmit={submit}>
                {/* Loading & Error messages */}
                {loading && <span className="text-info fs-5 d-block mb-2">{loading}</span>}
                {error && <span className="text-danger fs-5 d-block mb-2">{error}</span>}

                {/* Email Input */}
                <div className="mb-3">
                    <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg rounded-3"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-3">
                    <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-control-lg rounded-3"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-success w-100 fw-bold rounded-3"
                    onClick={() => navigate("/homephm")}
                    style={{ backgroundColor: "limegreen", color: "white" }}
                >
                    Sign In
                </button>
                </form>

                {/* SignUp Link */}
                <p className="mt-3 text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-info fw-semibold text-decoration-none">
                    Sign Up
                </Link>
                </p>
            </div>
        </div>

    )

}
export default Signin