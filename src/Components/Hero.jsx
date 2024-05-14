import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import image from '../Images/quantum_image.jpg';
import { setUser } from "../Slices/UserSlice";
const Hero = () => {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  dispatch(setUser(JSON.parse(user)));
  const hitApi=async()=>{
       const response = await fetch(`https://aktu-quantum-backend.onrender.com/pdf/1`,{
          method: "GET",
        })
        const val =await response.json();
        console.log(val);
        
  }
  useEffect(() => {
    const intervalId = setInterval(() => {

      hitApi();

    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row  h-[450px]">
      <div className=" p-1  flex flex-col flex-1   justify-center items-center">
        <div className=" flex flex-col gap-5 justify-center ">
          <h1 className=" text-3xl sm:text-5xl ">
          Free<span className="text-orange-600 hover:text-orange-700 "> AKTU Quantum</span>  <br></br>Study Guides <br></br>Ace Your Exams <br></br> Last Minute.
          </h1>
          <h2 className=" text-sm sm:text-md">
          Dive into AKTU quantum pdf with our website, offering free AKTU quantum PDFs.<br></br> Explore comprehensive resources for free quantum PDFs. <br></br>Get your AKTU quantum solutions hassle-free!<br></br> Get all year aktu quantum pdf download.
          </h2>
        </div>
      </div>
      <div className="flex flex-1  justify-center items-center">
        <img src={image} alt="hero" className=" w-[140px] sm:w-[450px]" />
      </div>
    </div>
  );
};

export default Hero;
