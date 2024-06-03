import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import InBetweenPost_Responsive from "../Ads/InBetweenPost_Responsive";
import RedirectButton from "./RedirectButton";

const View = () => {
  const location = useLocation();
  const [pdfUrl, setPdfUrl] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();
  const { Zoom } = zoomPluginInstance;
  const[url,setUrl] = useState("");
  useEffect(() => {
    const fetchPdfUrl = async () => {
      const pdfUrl = location.state?.pdfUrl;
      setUrl(pdfUrl);
      if (pdfUrl) {
        setPdfUrl(
          `https://aktu-quantum-backend.onrender.com/public/temp/${pdfUrl}`
        );
      }
    };
    fetchPdfUrl();
  }, [location.state?.pdfUrl]);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="ads-container top-ads text-center p-2 md:p-4 bg-gray-200">
      <ins className="adsbygoogle"
     style= {{display:"inline-block",width:"728px",height:"90px"}}
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="2317546035"></ins>
      </div>
      {/* <div>Download</div> */}
      <div className="ads-container mobile-ads md:hidden text-center p-2 bg-gray-200">
      <ins className="adsbygoogle"
     style = {{display:"inline-block",width:"340px",height:"90px"}}
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="6170775539"></ins>
      </div>
      <div>
        <div>
          <InBetweenPost_Responsive/>
        </div>
        <div className="flex justify-center items-center">
          <RedirectButton url={url}/>
        </div>
        <div>
        <InBetweenPost_Responsive/>
        </div>
      </div>
      <div className=' border-1 border-black flex flex-col sm:flex-row gap-5'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className="flex-1 relative border border-gray-300 p-2 md:p-5 rounded-lg shadow-md bg-white overflow-auto">
            {pdfUrl && (
              <div className="pdf-viewer-wrapper h-full overflow-auto bg-gray-50 p-2 md:p-4 rounded-lg shadow-inner">
                <Viewer
                  defaultScale={SpecialZoomLevel.PageFit}
                  fileUrl={pdfUrl}
                  plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
                />
              </div>
            )}
          </div>
        </Worker>
        <div className=' w-full sm:w-[300px] flex flex-col'>
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
          </div>
          <div className='mb-4'>
          <InBetweenPost_Responsive/>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
