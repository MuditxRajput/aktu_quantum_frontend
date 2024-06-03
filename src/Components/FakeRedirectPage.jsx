import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import InBetweenPost_Responsive from "../Ads/InBetweenPost_Responsive";
const FakeRedirectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getUrl = location.state.pdfUrl;
  const [showButton, setShowButton] = useState(false);
  const [counter, setCounter] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((pre) => pre - 1);
    }, 1000);
    const time = setTimeout(() => {
      setShowButton(true);
    }, 15000);

    return () => {
      clearInterval(time) 
      clearInterval(interval)
    };
  }, []);
  return (
    <>
   <div className='m-[50px] sm:m-[120px]  flex flex-col sm:flex-row'>
        <div className='  w-full sm:w-[876px] flex flex-col'>
          <div className='  p-4'>
            <h1 className ="text-2xl font-semibold">Download all aktu quantum easily</h1>
          </div>
          <div className=' p-4'>
           <InBetweenPost_Responsive/>
          </div>
          <div className='p-4'>
          <InBetweenPost_Responsive/>
          </div>
          <div className='p-4 flex justify-center items-center'>
          {!showButton && <p>Download will start in {counter} seconds </p>}
        {
            showButton && (
                <button
                className="bg-orange-600 text-white font-semibold px-2  rounded-md m-2 0 shadow-md shadow-orange-300 "
                onClick={() => navigate("/redirect", { state: { pdfUrl: getUrl } })}
              >
                {" "}
                Download pdf
              </button>
            )
        }

          </div>
          <div className='p-4'>
          <InBetweenPost_Responsive/>
          </div>
          <div className='p-4'>
            Hello, everyone now from our website you can get all the aktu quantum in just single click.
            Our website is compatiable for both mobile, pc , and tablet. You can get wide range of aktu quantum
            from our website. we cover 1st year, 2nd, 3rd year and 4th year aktu quantum.
          </div>
        </div>
        <div className=' w-full sm:w-[300px] flex flex-col p-4'>
          <div className='mb-4'>
          <InBetweenPost_Responsive/>
          </div>
          <div>
          <ul>
            <NavLink to={"/webt"}>
              <li className="text-orange-600">Web t B.tech quantum pdf </li>
            </NavLink>
            <NavLink to={"/rts"}>
              <li className="text-orange-600">Real time B.tech quantum pdf </li>
            </NavLink>
            <NavLink to={"/cn"}>
              <li className="text-orange-600">Computer Network B.tech quantum pdf </li>
            </NavLink>
            <NavLink to={"/challenge"}>
              <li className="text-orange-600">How to fill Challenge Evaluation in aktu </li>
            </NavLink>
           </ul>
           <InBetweenPost_Responsive/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FakeRedirectPage;
