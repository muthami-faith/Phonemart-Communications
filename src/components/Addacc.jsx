import { useState } from "react";
import React  from "react";
import axios from "axios";

const Addacc=()=>{
    const[acc_name,setAccName]=useState("")
    const[acc_brand,setAccBrand]=useState("")
    const[acc_cost,setAccCost]=useState("")
    const[acc_photo,setAccPhoto]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")

    const submit=async (e) => {
         e.preventDefault()
        setLoading("Please wait...")
        setError("")
        
        try {
            const data= new FormData()
            data.append("acc_name",acc_name)
            data.append("acc_brand",acc_brand)
            data.append("acc_cost",acc_cost)
            data.append("acc_photo",acc_photo)
            

            const response=await axios.post("https://ninjafaith.pythonanywhere.com/api/acc_product",data);

            //clear hook
            setLoading("")
            setError("")
            setSuccess(response.data.message)
            setAccName("")
            setAccBrand("")
            setAccCost("")
            setAccPhoto("")
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }        
    }

    return(
        <div className="row justify-content-center mt-4 mb-4">
            <div className="card shadow p-4 col-md-6 text-center bg-dark">
                <form onSubmit={submit}>
                    <span className="text-info">{loading}</span>
                    <span className="text-danger">{error}</span>
                    <span className="text-info">{success}</span>
                    <input type="text" placeholder="Accessory Model" className="form-control" onChange={(e)=>setAccName(e.target.value)}required value={acc_name}/>
                    <br/>
                    <input placeholder="Brand" className="form-control text-start" onChange={(e)=>setAccBrand(e.target.value)}required value={acc_brand}></input>
                    <br/>
                    <input type="number" placeholder="Price" className="form-control" onChange={(e)=>setAccCost(e.target.value)}required value={acc_cost}/>
                    <br/>
                    <label className="text-primary">Browse/Upload accesory image</label>
                    <input type="file" className="form-control" accept="image/*" onChange={(e)=>setAccPhoto(e.target.files[0])}required/> <br/>
                    <button type="submit" className="btn btn-primary">Add product</button>
                </form>
            </div>
        </div>
        
    )

}
export default Addacc