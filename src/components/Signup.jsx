import React, { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Signup=()=>{
   const[username,setUsername]=useState("")
   const[email,setEmail]=useState("")
   const[phone,setPhone]=useState("")
   const[password,setPassword]=useState("")
   const[loading,setLoading]=useState("")
   const[success,setSuccess]=useState("")
   const[error,setError]=useState("")
   const navigate=useNavigate("")
   const [passwordError, setPasswordError] = useState('');

   // Password validation function
   const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
};

// Handle password change with validation
const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
        setPasswordError('Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.');
    } else {
        setPasswordError('');
    }
};


   const submit=async(e)=>{
    e.preventDefault()
    if (!validatePassword(password)) {
        setError('Please fix password errors before submitting.');
        return;
    }
    setLoading("Please wait as we upload your data")

    try {
        
    

    //we are creating an object Formdata
    //and appending our updated hooks
    const data= new FormData()
    data.append("username",username)
    data.append("email",email)
    data.append("phone",phone)
    data.append("password",password)

    //send our dta using axios
    //axios is able to use request methods such post,get put,patch etc

    const response=await axios.post("https://ninjafaith.pythonanywhere.com/api/signup",data)
    setLoading("")
    //setSuccess("Signup successfully")
    setSuccess(response.data.message)
    setError("")

    //clear hooks when the signup is a success
    setUsername("")
    setEmail("")
    setPhone("")
    setPassword("")
    
    setTimeout(()=>navigate("/signin"),2000)
    
} catch (error) {
    setLoading("")
    setError(error.message)
    
        
}
    }
    
    return(
        <div className="row justify-content-center mt-4 mb-5 ms-1 container-fluid">
        <div className="col-md-6 card shadow-lg p-4 text-center bg-dark text-light rounded-4">
            <h2 className="text-light fs-4 mb-3">
            <i>PHONEMART COMMUNICATIONS</i>
            </h2>

            <form onSubmit={submit}>

            {/* Status Messages */}
            {loading && <div className="text-info mb-2">{loading}</div>}
            {success && <div className="text-success mb-2">{success}</div>}
            {error && <div className="text-danger mb-2">{error}</div>}
            {passwordError && <div className="text-danger mb-2">{passwordError}</div>}

            {/* Username */}
            <div className="mb-3">
                <input
                type="text"
                placeholder="Enter Username"
                className="form-control form-control-lg rounded-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="mb-3">
                <input
                type="email"
                placeholder="Enter Email"
                className="form-control form-control-lg rounded-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Phone Number */}
            <div className="mb-3">
                <input
                type="tel"
                placeholder="Enter Phone Number"
                className="form-control form-control-lg rounded-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            {/* Password */}
            <div className="mb-3">
                <input
                type="password"
                placeholder="Enter Password"
                className="form-control form-control-lg rounded-3"
                value={password}
                onChange={handlePasswordChange}
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="btn btn-success w-100 fw-bold rounded-3"
                disabled={Boolean(passwordError)}
                style={{ backgroundColor: 'limegreen', color: 'white' }}
            >
                Sign Up
            </button>
            </form>

            <p className="mt-3">
            Already have an account?{' '}
            <Link to="/signin" className="text-info text-decoration-none fw-semibold">
                Sign in
            </Link>
            </p>
        </div>
    </div>


    )
}
export default Signup