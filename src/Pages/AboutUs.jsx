import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../Components/MobileMenu";
const AboutUs = () => {
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.user?.mobileMenu);
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
                <title>About us - Free AKTU Quantum PDFs</title>
                <meta name="description" content="Know more about Aktu Quantum free pdf Access now!" />
                <link rel="canonical" href="https://www.aktu-quantum.online/about" />
      </Helmet>
      {isOpen && <MobileMenu />}
      <div className="flex flex-col justify-center items-center ">
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h1>
        </div>
        <div className="  m-5">
          <p class="mt-4  text-lg text-black">
            Welcome to our platform dedicated to helping students excel in their
            academic journey. At aktu-quantum, we understand the
            challenges students face when preparing for exams, especially in the
            demanding environment of the Abdul Kalam Technical University
            (AKTU).<br></br> Our mission is simple yet powerful: to provide
            students with access to high-quality study materials that empower
            them to succeed. That's why we've curated a comprehensive collection
            of resources, including the renowned AKTU Quantum series, available
            for free download to all students.<br></br> The AKTU Quantum series
            is a game-changer for students seeking to ace their exams. Developed
            by experts in the field and tailored specifically to the AKTU
            syllabus, these PDFs cover key concepts, practice problems, and exam
            strategies to help you master your coursework with confidence.
            <br></br> With our platform, you can easily access and download the
            latest AKTU Quantum PDFs, ensuring you have the tools you need to
            excel in your studies. Whether you're revising for an upcoming exam
            or looking to deepen your understanding of complex topics, our
            resources are here to support you every step of the way.<br></br> At
            aktu-quantum, we're committed to fostering academic success and
            empowering students to reach their full potential. Join our
            community of motivated learners and discover the difference our
            resources can make in your academic journey.
          </p>
        </div>
      </div>
      <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded m-4"
          onClick={() => navigate("/Free-AKTU-Quantum-PDFs-for-1st-Year-Students")}
        >
          Back
        </button>
    </>
  );
};

export default AboutUs;
