import React from "react";
import { useDispatch } from "react-redux";
import image from '../Images/quantum_image.jpg';
import { setUser } from "../Slices/UserSlice";
const Hero = () => {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  dispatch(setUser(JSON.parse(user)));
  return (
    <div className="flex flex-col sm:flex-row  h-[450px]">
      <div className=" p-1  flex flex-col flex-1   justify-center items-center">
        <div className=" flex flex-col gap-5 justify-center ">
          <h1 className=" text-3xl sm:text-5xl font-semibold">
          {/* "Free AKTU Quantum Study Guides – Ace Your Exams Last Minute | StudyHelp" */}
          Free<span className="text-orange-600 hover:text-orange-700 "> AKTU Quantum</span>  <br></br>Study Guides <br></br>Ace Your Exams <br></br> Last Minute.
          </h1>
          <p className=" text-sm sm:text-md">
          Dive into AKTU quantum with our website, offering free AKTU quantum PDFs.<br></br> Explore comprehensive resources for free quantum PDFs. <br></br>Get your AKTU quantum solutions hassle-free!
          </p>
          {/* <div className="flex">
            <HeaderButton  text="Sign Up" />
          </div> */}
        </div>
      </div>
      <div className="flex flex-1  justify-center items-center">
        <img src={image} alt="hero" className=" w-[140px] sm:w-[450px]" />
      </div>
    </div>
  );
};

export default Hero;
