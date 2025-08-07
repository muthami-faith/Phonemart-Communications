import { useState} from "react";
import CreditCardForm from "./CreditCardForm";
import MpesaForm from "./MpesaForm";
import './Header.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Payments=()=> {
  const [mode, setMode] = useState("mpesa");
  const [status, setStatus] = useState(null);
  const [agentNumber, setAgentNumber] = useState('451113');
  const [storeNumber, setStoreNumber] = useState('442351');
  const navigate=useNavigate("")
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // state variables: name, phone, loading, fixedAmount
 
const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please wait as we upload your data")

    try {
        
    

    //we are creating an object Formdata
    //and appending our updated hooks
    const data= new FormData()
    data.append("username",username)
    data.append("phone",phone)

    //send our dta using axios
    //axios is able to use request methods such post,get put,patch etc

    const response=await axios.post("https://ninjafaith.pythonanywhere.com/api/signup",data)
    setLoading("")
    //setSuccess("Signup successfully")
    setSuccess(response.data.message)
    setError("")

    //clear hooks when the signup is a success
    setUsername("")
    setPhone("")
    
    
} catch (error) {
    setLoading("")
    setError(error.message)        
}
    }  


  return (
    <div className="container-fluid row">
        <div className="mpesa-statement-container col-md-6">
          <div className="logo-wrapper">
            <img src="mpesalogo.jpg" alt="M-Pesa Logo" className="mpesa-logo" />
          </div>
          <h3 className="mpesa-statement-header">Withdraw Cash</h3>

          <div className="mpesa-info-card">
            <p><strong>🔢 Agent No.:</strong> <span style={{color: "#000000"}}><b>{agentNumber}</b></span></p>
            <p><strong >🏪 Store No.:</strong> <span style={{color: "#000000"}}><b>{storeNumber}</b></span></p>
          </div>
          <hr className="mpesa-divider" />
          

          {/* <MpesaForm
            onInitiate={() => setStatus('pending payment')}
            onResult={setStatus}
          /> */}
        </div>
        <div className=" mpesa-statement-container col-md-6">
          <h3 className="mpesa-statement-header">Please fill the information below</h3>
          <form className="mpesa-buyer-form object-center" onSubmit={submit}>
            {loading && <div className="text-info mb-2">{loading}</div>}
            {success && <div className="text-success mb-2">{success}</div>}
            {error && <div className="text-danger mb-2">{error}</div>}
            
          <div className="mb-3">
          <label>Name</label>
            <input
            type="text"
            placeholder="Enter Username"
            className="form-control form-control-lg rounded-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
          <input
          type="tel"
          placeholder="Enter Phone Number"
          className="form-control form-control-lg rounded-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
          </div>
          <button
          type="submit"
          className="btn btn-success w-100 fw-bold rounded-3"
          style={{ backgroundColor: 'limegreen', color: 'white' }}
          onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

          </form>
      </div>
    </div>
  )
}
export default Payments
