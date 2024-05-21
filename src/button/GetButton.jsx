import React from 'react';
import { useNavigate } from 'react-router-dom';
const GetButton = () => {
  const navigate = useNavigate();
  return (
    <div>
        <button  className=' px-2 py-1 mt-5 bg-orange-600 rounded-lg text-white font-semibold' onClick={()=>navigate("/")}>
                Get All Aktu Quantum
        </button>
    </div>
  )
}

export default GetButton