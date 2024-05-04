import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const View = () => {
    const location = useLocation();
    const [pdfUrl, setPdfUrl] = useState('');
    
    useEffect(() => {
        // Fetch the PDF URL when the component mounts
        const fetchPdfUrl = async () => {
            const pdfUrl = location.state?.pdfUrl;
            if (pdfUrl) {
                setPdfUrl(`https://aktu-quantum-backend.onrender.com/public/temp/${pdfUrl}`);
            }
        };
        fetchPdfUrl();
    }, [location.state?.pdfUrl]);

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
                {pdfUrl && <Viewer fileUrl={pdfUrl} />}
            </div>
        </Worker>
    );
};

export default View;
