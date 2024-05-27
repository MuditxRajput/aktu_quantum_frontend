import React from "react";
import { useNavigate } from "react-router-dom";
const HomepageReturn = ({ name }) => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-start">
      <button className="bg-orange-600 text-white font-semibold px-2 py-1 rounded-md m-2 border-2 border-orange-700 shadow-md shadow-orange-300 " onClick={()=>navigate('/')}>
        {" "}
        Get {name} Quantum [Free]
      </button>
    </div>
  );
};

export default HomepageReturn;
