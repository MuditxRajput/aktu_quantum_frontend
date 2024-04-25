import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import pdfImage from "../Images/pdf.png";
import { setPdfData } from "../Slices/UserSlice";
const PdfArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
  // const [userInfo, setUserInfo] = useState();
  // const searchQuery = useSelector((state) => state.user?.searchPdf);
  const searchItem = useSelector((state) => state.user?.query);
  const yearWishPdf = useSelector((state) => state.user?.yearPdf);
  const finalPdf = yearWishPdf?.filter((val) =>
    val?.pdfName.toLowerCase().includes(searchItem?.toLowerCase())
  );
  const hitApi = async () => {
    try {
      const response = await fetch(
        `https://aktu-quantum-backend.onrender.com/admin/numberOfPdf`,
        {
          method: "GET",
        }
      );
      const val = await response.json();
      dispatch(setPdfData(val.numberOfPdf));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    hitApi();
  }, []);

  const handlePdfClick = (pdfUrl) => {
    navigate("/view", { state: { pdfUrl: pdfUrl } });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 m-3 p-5 gap-2 md:gap-7">
      {searchItem === null || searchItem ==='' ? (
        yearWishPdf?.map((val) => {
          return (
            <div
              key={val._id}
              className="cursor-pointer hover:shadow-lg hover:shadow-orange-500 sm:w-[200px] sm:h-[290px] h-[250px]  rounded-2xl border-2 border-black"
              onClick={() => handlePdfClick(val.pdfLink)}
            >
              <div>
                <img src={pdfImage} alt="pdf" />
              </div>
              <div className="px-1" >
                <div className="bg-orange-400 rounded-sm mt-2 mb-1">
                  <p className="px-1 text-sm font-semibold"> {val.pdfName}</p>
                  </div>
                   <p className="font-semibold"> Year: {val.pdfYear} </p>
                   <br />
                 </div>
            </div>
          );
        })
      ) : searchItem !== null && finalPdf.length === 0 ?(
        <>
        <p className="text-red-600 font-semibold">Pdf is not found, Fill pdf request above to get pdf in 1 hr</p>
        {
        yearWishPdf?.map((val) => {
          return (
            <div
              key={val._id}
              className="cursor-pointer hover:shadow-lg hover:shadow-orange-500 sm:w-[200px] sm:h-[290px] h-[250px]  rounded-2xl border-2 border-black"
              onClick={() => handlePdfClick(val.pdfLink)}
            >
              <div>
                <img src={pdfImage} alt="pdf" />
              </div>
              <div className="px-1" >
                <div className="bg-orange-400 rounded-sm mt-2 mb-1">
                  <p className="px-1 text-sm font-semibold"> {val.pdfName}</p>
                  </div>
                   <p className="font-semibold"> Year: {val.pdfYear} </p>
                   <br />
                 </div>
            </div>
          );
        })}
        </>
      
        )
       : (
        finalPdf?.map((val) => {
          return (
            <div
              key={val._id}
              className="cursor-pointer hover:shadow-lg hover:shadow-orange-500 sm:w-[200px] sm:h-[290px] h-[250px]  rounded-2xl border-2 border-black"
              onClick={() => handlePdfClick(val.pdfLink)}
            >
              <div>
                <img src={pdfImage} alt="pdf" />
              </div>
              <div className="px-1" >
                <div className="bg-orange-400 rounded-sm mt-2 mb-1">
                  <p className="px-1 text-sm font-semibold"> {val.pdfName}</p>
                  </div>
                   <p className="font-semibold"> Year: {val.pdfYear} </p>
                   <br />
                 </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PdfArea;
