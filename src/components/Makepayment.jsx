import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Makepayment = () => {
    const {product,img_url}=useLocation().state||{}
    const[phone,setPhone]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")


    const submit=async (e) => {
        e.preventDefault()
        setLoading("Please wait")
        

        const data=new FormData()
        data.append("phone",phone)
        data.append("amount",product.product_cost)
        
        try {
            const response=await axios.post("https://ninjafaith.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            setError("")
            setSuccess(response.data.message)
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }

        
    }
  return (
    <div className='row mt-2 container-fluid mb-4 mt-4'>
        <div className='col-md-5 justify-content-center text-center pt-2'>
            <span className='text-info'>{loading}</span>
            <span className='text-success'>{success}</span>
            <span className='text-danger'>{error}</span>

            
            <div className='card shadow'>
                <h3 className='mt-2'>{product.product_name} </h3>
                <p className='text-muted'>{product.product_description}</p>
                <img src={img_url+product.product_photo} alt="" className="product_img"/>
                <p className='text-primary fs-4 pt-2'>Ksh{product.product_cost}</p>
                <div className='card-footer'>
                    <form onSubmit={submit}>
                        <label htmlFor="" className='fs-4 text-info'>Phone to make payment</label>
                        <input type="tel" className='form-control' placeholder='+254...' value={phone} onChange={(e)=>setPhone(e.target.value)}/> <br />
                        <button type='submit' className='btn btn-success'>Purchase</button>
                    </form>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Makepayment