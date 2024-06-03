import React, { useEffect } from "react";
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

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsbygoogle error:", e);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aktu Free Quantum for B.Tech Students</title>
        <meta
          name="description"
          content="Unlock free AKTU Quantum's, for 1st, 2nd, 3rd, 4th year aktu quantum pdf in free. Access now!"
        />
        <link rel="canonical" href="https://www.aktu-quantum.online/" />
      </Helmet>
      {isOpen && <MobileMenu />}
      <div>
        <Hero />
      </div>
      <div className="  w-full ">
        <div className="flex justify-center items-center">
          
        <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="7420680973"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
        </div>
      </div>
      <div className="  w-full">
        <div className="flex justify-center items-center">
          
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: "720px", height: "90px" }}
            data-ad-client="ca-pub-8884977910314227"
            data-ad-slot="6170775539"
          ></ins>
        </div>
      </div>
      <div>
        <YearButton />
      </div>
      <div className="  w-full">
        <div className="flex justify-center items-center">
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: "300px", height: "90px" }}
            data-ad-client="ca-pub-8884977910314227"
            data-ad-slot="6170775539"
          ></ins>
        </div>
      </div>
      <div className="mt-5">
        <HomepageSearch />
      </div>
      <div className="  w-full">
        <div className="flex justify-center items-center">
        <ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-8884977910314227"
     data-ad-slot="7420680973"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
        </div>
      </div>
      <div>
        <PdfArea />
        <BelowButton />
      </div>
    </>
  );
};

export default Homepage;
