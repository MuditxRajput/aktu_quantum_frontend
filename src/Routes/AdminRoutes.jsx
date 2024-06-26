import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AdminRoutes = () => {
    const navigate = useNavigate();
    const[ok,setOk] = useState(false);
    const hitApi=async(req,res)=>{
         try {
            const token = localStorage.getItem("token");
            // console.log(token);
            if(!token) throw new Error("User is not authenticated")
           const response =  await fetch(`https://aktu-quantum-backend.onrender.com/admin/auth`,{
                method:"POST",
                headers:{
                    "Content-Type" :"application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            const val = await response.json()
            console.log(val);
            if(val.sucess)
            {
                setOk(true)
            }
            else{
                navigate('/');
            }
         } catch (error) {
            toast.error("Something went wrong")
         }
    }
    useEffect(()=>{
         hitApi();
    },[])
  return ok ?<Outlet/> : "Loading..."
}

export default AdminRoutes