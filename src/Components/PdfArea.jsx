import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import pdfImage from "../Images/pdf.png";
import Shimmer from "../Pages/Shimmer";
import { setPdfData } from "../Slices/UserSlice";
const PdfArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const[loading,isLoading] = useState(false)
  const searchItem = useSelector((state) => state.user?.query);
  const searchPdf = useSelector((state) => state.user?.searchPdf);
  const yearWishPdf = useSelector((state) => state.user?.yearPdf);
  const shimmer = useSelector((state) => state.user?.shimmer);
  const Allpdf = useSelector((state) => state.user?.pdfData);
  const firstYear = Allpdf?.filter((val) => val.pdfYear === "1");
  const finalPdf = searchPdf?.filter((val) =>
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
      // isLoading(true);
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
  if (yearWishPdf.length === 0 && finalPdf.length === 0 && shimmer === false)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 m-3 p-5 gap-2 md:gap-7">
        {firstYear?.map((val)=>{
          return <div
                key={val._id}
                className="cursor-pointer hover:shadow-lg hover:shadow-orange-500 sm:w-[200px] sm:h-[290px] h-[250px]  rounded-2xl border-2 border-black"
                onClick={() => handlePdfClick(val.pdfLink)}
              >
                <div>
                  <img src={pdfImage} alt="pdf" />
                </div>
                <div className="px-1">
                  <div className="bg-orange-400 rounded-sm mt-2 mb-1">
                    <p className="px-1 text-sm font-semibold"> {val.pdfName}</p>
                  </div>
                  <p className="font-semibold"> Year: {val.pdfYear} </p>
                  <br />
                </div>
              </div>
        })}
      </div>
    );
  if (shimmer === true && yearWishPdf.length === 0) return <Shimmer />;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aktu Free Quantum for B.Tech Students </title>
        <meta
          name="description"
          content=" Here we can add aktu quantum pdf.."
        />
        <link rel="canonical" href="https://www.aktu-quantum.online/addpdf" />
      </Helmet>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 m-3 p-5 gap-2 md:gap-7">
        {searchItem === null || searchItem === "" ? (
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
                <div className="px-1">
                  <div className="bg-orange-400 rounded-sm mt-2 mb-1">
                    <p className="px-1 text-sm font-semibold"> {val.pdfName}</p>
                  </div>
                  <p className="font-semibold"> Year: {val.pdfYear} </p>
                  <br />
                </div>
              </div>
            );
          })
        ) : searchItem !== null && finalPdf.length === 0 ? (
          <>
            <p className="text-red-600 font-semibold">
              Pdf is not found, Fill pdf request above to get pdf in 1 hr
            </p>
            {yearWishPdf?.map((val) => {
              return (
                <div
                  key={val._id}
                  className="cursor-pointer hover:shadow-lg hover:shadow-orange-500 sm:w-[200px] sm:h-[290px] h-[250px]  rounded-2xl border-2 border-black"
                  onClick={() => handlePdfClick(val.pdfLink)}
                >
                  <div>
                    <img src={pdfImage} alt="pdf" />
                  </div>
                  <div className="px-1">
                    <div className="bg-orange-400 rounded-sm mt-2 mb-1">
                      <p className="px-1 text-sm font-semibold">
                        {" "}
                        {val.pdfName}
                      </p>
                    </div>
                    <p className="font-semibold"> Year: {val.pdfYear} </p>
                    <br />
                  </div>
                </div>
              );
            })}
          </>
        ) : (
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
                <div className="px-1">
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
    </>
  );
};

export default PdfArea;
