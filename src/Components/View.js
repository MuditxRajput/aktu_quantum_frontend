import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
const View = () => {
    const location = useLocation();
  const pdfUrl = location.state?.pdfUrl;
  const pdf = `https://aktu-quantum-backend.onrender.com/public/temp/${pdfUrl}`

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
   <div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
    }}
>
    <Viewer fileUrl={pdf} />
</div>
    
</Worker>
  )
}

export default View