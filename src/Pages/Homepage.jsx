import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import BelowPdfView from "../Ads/BelowPdfView";
import BelowYearWise from "../Ads/BelowYearWise";
import Hero from "../Components/Hero";
import HomepageSearch from "../Components/HomepageSearch";
import MobileMenu from "../Components/MobileMenu";
import PdfArea from "../Components/PdfArea";
import YearButton from "../Components/YearButton";
const Homepage = () => {
  const isOpen = useSelector((state) => state.user?.mobileMenu);
  return (
    <>
      <Helmet>
      <meta charSet="utf-8" />
                <title>Aktu Free Quantum for B.Tech Students</title>
                <meta name="description" content="Unlock free AKTU Quantum's, for 1st, 2nd, 3rd, 4th year aktu quantum pdf in free. Access now!" />
                <link rel="canonical" href="https://www.aktu-quantum.online/" />
      </Helmet>
      {isOpen && <MobileMenu />}
      <div>
        <Hero />
      </div>
      <div>
        {/* <CountBanner/> */}
        <YearButton />
        <BelowYearWise/>
      </div>
      <div className="mt-5">
        <HomepageSearch />
      </div>
      <div>{/* <HomepageDropbox/> */}</div>
      <div>
        <PdfArea />
        <BelowPdfView/>
      </div>
    </>
  );
};

export default Homepage;
