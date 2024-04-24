
import React from 'react';
import { useLocation } from 'react-router-dom';
const PdfView = () => {
  const location = useLocation();
  const pdfUrl = location.state.pdfUrl;
  const pdf = `https://quantum-backend-1.onrender.com/public/temp/${pdfUrl}`

  return (
    <div className=' bg-orange-600'>
      <iframe src={pdf} title="PDF Viewer" width="100%" height="670px" />
    </div>
  );
};

export default PdfView;

