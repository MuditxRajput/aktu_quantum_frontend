import React from "react";
import { useDispatch } from "react-redux";
import { setYearPdf } from "../Slices/UserSlice";

const YearButton = () => {
    const dispatch = useDispatch();
  const year = [1, 2, 3, 4];
  const getYearWisePdf=async(yearData)=>{
        try {
        // hit api...
        // console.log(`http://localhost:8000/pdf/${yearData}`);
        const res = await fetch(`http://localhost:8000/pdf/${yearData}`,{
            method:"GET",
        })
        const pdfData = await res.json();
        // console.log(pdfData);
        dispatch(setYearPdf(pdfData.getPdfFromDb))
    } catch (error) {
        
    }
  }
  const onClickHandle=(year)=>
  {
    getYearWisePdf(year);
    // try {
    //     // hit api...
    //     const res = fetch(`http://localhost:8000/pdf/${year}`,{
    //         method:"GET",
    //     })
    //     const pdfData = await 
    // } catch (error) {
        
    // }
  }
  return (
    <div>
      <div className="flex bg-orange-600 h-[90px] justify-evenly px-1 items-center text-white ">
        {/* <div className="px-2"></div> */}
        {year?.map((year) => {
          return (
            <div key={year}>
              {" "}
              <button onClick={()=>onClickHandle(year)} className="bg-white rounded-3xl px-3 py-1 border-2 border-orange-700 text-black font-semibold cursor-pointer">
                {year} year
              </button>
            </div>
          );
        })}
        {/* <div>
            <button className="bg-orange-600 rounded-3xl px-3 py-1 border-2 border-orange-700 text-white" >1 year</button>
        </div>
        <div>  <button className="bg-orange-600 rounded-3xl px-3 py-1 border-2 border-orange-700 text-white" >2 year</button></div>
        <div> <button className="bg-orange-600 rounded-3xl px-3 py-1 border-2 border-orange-700 text-white" >3 year</button></div>
        <div> <button className="bg-orange-600 rounded-3xl px-3 py-1 border-2 border-orange-700 text-white" >4 year</button></div> */}
      </div>
    </div>
  );
};

export default YearButton;
