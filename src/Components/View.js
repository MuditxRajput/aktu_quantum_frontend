import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const [pdfUrl, setPdfUrl] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const zoomPluginInstance = zoomPlugin();
  const { Zoom } = zoomPluginInstance;

  useEffect(() => {
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
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="ads-container top-ads text-center p-2 md:p-4 bg-gray-200">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8884977910314227"
          data-ad-slot="3824013482"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <div>Download</div>
      <div className="ads-container mobile-ads md:hidden text-center p-2 bg-gray-200">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8884977910314227"
          data-ad-slot="3824013482"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <div className="flex flex-col md:flex-row h-[650px] md:h-[750px] space-y-2 md:space-y-0 md:space-x-2">
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
        <div className="ads-container sidebar-ads hidden md:block w-[450px] bg-gray-200 p-4">
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: "200px", height: "500px" }}
            data-ad-client="ca-pub-8884977910314227"
            data-ad-slot="1722348348"
          ></ins>
        </div>
      </div>
    </>
  );
};

export default View;
