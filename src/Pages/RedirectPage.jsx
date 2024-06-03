import React from "react";
import { useLocation } from "react-router-dom";
import InBetweenPost_Responsive from "../Ads/InBetweenPost_Responsive";
const RedirectPage = () => {
  const location = useLocation();
  const getUrl = location.state.pdfUrl;
  console.log(getUrl);
  const pdf = `https://aktu-quantum-backend.onrender.com/public/temp/${getUrl}`;
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-[300px] flex flex-col border-2 border-purple-600">
        <InBetweenPost_Responsive/>
        </div>
        <div className=" bg-orange-600 flex-1 border-2 border-orange-500" >
          <iframe src={pdf} title="PDF Viewer" width="100%" height="670px" />
        </div>
        <div className="w-full sm:w-[300px] flex flex-col  border-2 border-red-600">
        <InBetweenPost_Responsive/>
        </div>
      </div>
    </>
  );
};

export default RedirectPage;
