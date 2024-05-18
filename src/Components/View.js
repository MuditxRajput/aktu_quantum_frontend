import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const [pdfUrl, setPdfUrl] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    // Customize viewer properties
    toolbarPlugin: {
      // Customize toolbar properties
      zoomPlugin: {
        // Set default zoom level
        initialZoom: 1.2, // Adjust the zoom level as needed
      },
    },
  });

  useEffect(() => {
    // Fetch the PDF URL when the component mounts
    const fetchPdfUrl = async () => {
      const pdfUrl = location.state?.pdfUrl;
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
    }

    catch (e) {
            console.log(e);
    }

},[]);

  return (
    <>
      <div className="p-4 bg-blue-100 rounded-lg shadow-md text-center text-lg font-semibold text-blue-800 mb-4 md:mb-0">
      <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="5237716241"></ins>
      </div>
      <div className="flex flex-col md:flex-row h-[650px] md:h-[750px] space-y-2 md:space-y-0 md:space-x-2">
        <div className="w-full md:w-[120px] bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-semibold">
        <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="5237716241"></ins>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div className="flex-1 relative border border-gray-300 p-2 md:p-5 rounded-lg shadow-md bg-white overflow-auto">
            {pdfUrl && (
              <div className="pdf-viewer-wrapper h-full overflow-auto bg-gray-50 p-2 md:p-4 rounded-lg shadow-inner">
                <Viewer
                  defaultScale={SpecialZoomLevel.PageFit}
                  fileUrl={pdfUrl}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            )}
          </div>
        </Worker>
        <div className="w-full md:w-[120px] bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-center text-gray-700 font-semibold">
        <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="5237716241"></ins>
        </div>
      </div>
    </>
  );
};

export default View;
