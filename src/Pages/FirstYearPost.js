import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
const FirstYearPost = () => {
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
                <title>Free AKTU Quantum PDFs for 1st Year Students</title>
                <meta name="description" content="Free AKTU Quantum PDFs for 1st Year Students,Are you a first-year student at AKTU (Dr. A.P.J. Abdul Kalam Technical University), eager to excel in your academic journey?" />
                <link rel="canonical" href="https://www.aktu-quantum.online/Free-AKTU-Quantum-PDFs-for-1st-Year-Students" />
      </Helmet>
  
    <div className="m-7 rounded-md shadow-sm shadow-gray-700 p-10">
      <div>
        <h1 className="font-bold text-2xl mb-2">
          Free AKTU Quantum PDFs for 1st Year Students
        </h1>
      </div>
      <div>
        <p>
          Are you a first-year student at AKTU (Dr. A.P.J. Abdul Kalam Technical
          University), eager to excel in your academic journey? Look no further!
          We are thrilled to announce that we are offering a treasure trove of
          free AKTU Quantum PDFs to aid you in your quest for knowledge and
          success.
        </p>
        <br></br>
        <p>
          At AKTU, we understand the importance of quality resources in shaping
          a student's academic path. That's why we have curated a collection of
          Quantum PDFs covering a diverse range of subjects pertinent to
          first-year students. These resources are meticulously crafted to align
          with the AKTU curriculum and help students grasp complex concepts with
          ease.
        </p>
        <br></br>
        <p>
          Here's a glimpse of the AKTU Quantum PDFs available for first-year
          students:
        </p>
        <ul>
          <NavLink to={"/"} className="text-blue-600">
            <li>Soft Skill Quantum</li>{" "}
          </NavLink>
          <NavLink to={"/"} className="text-blue-600">
            {" "}
            <li>Mechanical Engineering Quantum</li>{" "}
          </NavLink>
          <NavLink to={"/"} className="text-blue-600">
            {" "}
            <li>Engineering Chemistry Quantum</li>
          </NavLink>
          <NavLink to={"/"} className="text-blue-600">
            <li>Electronic Engineering Quantum</li>{" "}
          </NavLink>
          <NavLink to={"/"} className="text-blue-600">
            {" "}
            <li>Engineering Maths - 1 Quantum</li>{" "}
          </NavLink>
          <NavLink to={"/"} className="text-blue-600">
            {" "}
            <li>Engineering Physics Quantum</li>{" "}
            <li>Engineering Maths - 2 Quantum</li>
          </NavLink>
          <NavLink to={"/"} className="text-blue-600">
            {" "}
            <li>Programming for Problem Solving Quantum</li>
          </NavLink>
          <NavLink to={"/"} className="text-blue-600">
            {" "}
            <li>Environment and Ecology Quantum</li>
          </NavLink>
        </ul>
        <p>
          We believe that education should be accessible to all, which is why we
          are proud to offer these AKTU Quantum PDFs completely free of charge.
          Whether you're studying for exams, revising concepts, or simply
          exploring new topics, our Quantum PDFs are designed to support your
          academic endeavors every step of the way
        </p>
        <br></br>
        <p>
          By providing these resources, we aim to empower AKTU students to excel
          academically, achieve their goals, and contribute meaningfully to
          society. We understand that the journey through higher education can
          be challenging, but with the right tools and resources at your
          disposal, success is within reach.
        </p>
        <br></br>
        <p>
          So, why wait? Take advantage of this opportunity to access
          high-quality educational material tailored to your needs. Download
          your free AKTU Quantum PDFs today and embark on a journey of discovery
          and learning like never before.
        </p>
        <br></br>
        <p>
          Remember, at AKTU, your success is our priority. Together, let's
          unlock the doors to a brighter future through knowledge and education.
        </p>
        <br></br>
      </div>
      <div>
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded m-4"
          onClick={() => navigate("/post")}
        >
          Back
        </button>
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded m-4"
          onClick={() => navigate("/")}
        >
          Get All Quantum
        </button>
      </div>
    </div>
    </>
  );
};

export default FirstYearPost;
