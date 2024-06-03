// In App we need to design the react router dom...
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import View from "./Components/View";
import AboutUs from "./Pages/AboutUs";
import AddPdf from "./Pages/AddPdf";
import Contact from "./Pages/Contact";
import CustomePage from "./Pages/CustomePage";
import Disclaimer from "./Pages/Disclaimer";
import Dmca from "./Pages/Dmca";
import FirstYearPost from "./Pages/FirstYearPost";
import Fottter from "./Pages/Fottter";
import Homepage from "./Pages/Homepage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Result from "./Pages/Result";
import Aktu_Quantum from "./Post/Aktu_Quantum";
import Challenge from "./Post/Challenge";
import ComputerNetworkPost from "./Post/ComputerNetworkPost";
import RealTimePost from "./Post/RealTimePost";
import WebTpdf from "./Post/WebTpdf";
import PostLayout from "./PostLayout/PostLayout";
import store from "./Store/configStore";
const App = () => {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/register" element={<RegisterPage/>} /> */}
          <Route path="/About" element={<AboutUs/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Disclaimer" element={<Disclaimer/>} />
          <Route path="/Privacy" element={<PrivacyPolicy/>} />
          {/* <Route path="/Home" element={<Homepage/>} /> */}
          {/* <Route path="/Sitemap.xml" element={<Sitemap/>} /> */}
          {/* <Route path="/post" element={<ShowAllPost/>} /> */}
          <Route path="/*" element={<CustomePage/>} />
          {/* <Route path="/post/:name" element={<ShowSinglePost/>} /> */}
          <Route path="/addPdf" element={<AddPdf/>} />
          <Route path="/first" element = {<FirstYearPost/>} />

          {/* <Route path="/login" element={<LoginPage/>} /> */}
          {/* <Route path="/forgetPassword" element = {<ForgetPassword/>}  /> */}
          {/* <Route path="/dashboard" element ={<CreatePost/>}> */}
             {/* <Route path="" element={<AddPdf/>} /> */}
          {/* </Route> */}
          
          {/* <Route path="/view" element = {<PdfView/>} />  */}
          <Route path="/view" element = {<View/>} />
          <Route path="/result" element = {<Result/>}  />
          <Route path="/challenge" element = {<Challenge/>}  />
          <Route path="/aktuQuantum" element = {<Aktu_Quantum/>}  />
          <Route path="/dmca" element = {<Dmca/>}  />
          <Route path="/webt" element = {<WebTpdf/>}  />
          <Route path="/cn" element = {<ComputerNetworkPost/>}  />
          <Route path="/rts" element = {<RealTimePost/>}  />
          <Route path="/post" element = {<PostLayout/>}  />
        </Routes>
        <Fottter/>
      </BrowserRouter>
    </Provider>
   
  );
};
export default App;
