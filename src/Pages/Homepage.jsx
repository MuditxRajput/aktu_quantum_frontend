import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import BelowButton from "../Ads/BelowButton";
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
      <div className=" hidden sm:block w-full bg-orange-600    ">
      <div className="flex justify-center items-center">
      <ins class="adsbygoogle"
     style={{display:"inline-block",width:"728px",height:"340px"}}
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="3927755576"></ins>
      </div>
      <ins class="adsbygoogle"
     style={{display:"inline-block",width:"340px",height:"90px"}}
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="6170775539"></ins>
      </div>
      <div className=" sm:hidden bg-orange-600 w-full  ">
mob
      </div>
      <div>
        {/* <CountBanner/> */}
       
        <YearButton />
      </div>
      <div className="mt-5">
        <HomepageSearch />
      </div>
      <div>{/* <HomepageDropbox/> */}</div>
      <div>
        <PdfArea />
        <BelowButton/>
      </div>
    </>
  );
};

export default Homepage;
