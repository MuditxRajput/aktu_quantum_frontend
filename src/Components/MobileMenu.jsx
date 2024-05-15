import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setMobileMenu } from "../Slices/UserSlice";

const MobileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const MenuItem = React.memo(({ text, onClick }) => {
    return (
      <li className='hover:text-orange-600 cursor-pointer' onClick={onClick}>
        {text}
      </li>
    );
  });

  const handleDropdown = (path) => {
    dispatch(setMobileMenu(false));
    navigate(path);
  };

  return (
    <div className="absolute w-full z-10 text-black bg-white outline-none border-none flex justify-center">
      <ul className="flex flex-col sm:gap-10 text-black font-Roboto font-semibold">
        <li className='hover:text-orange-600 cursor-pointer' onClick={() => setShowDropdown(!showDropdown)}>
          Important
          {showDropdown && (
            <ul className="mt-2 pl-4 border-l-2 border-orange-600">
              <MenuItem text="Result" onClick={() => handleDropdown('/result')} />
              <MenuItem text="Challenge" onClick={() => handleDropdown('/challenge')} />
            </ul>
          )}
        </li>
        <MenuItem text="Post" onClick={() => navigate('/first')} />
        <MenuItem text="About" onClick={() => navigate('/about')} />
        <MenuItem text="Contact" onClick={() => navigate('/contact')} />
        <MenuItem text="Privacy" onClick={() => navigate('/privacy')} />
        <MenuItem text="Disclaimer" onClick={() => navigate('/disclaimer')} />
        <MenuItem text="Dmca" onClick={() => navigate('/dmca')} />
        <MenuItem text="Request-pdf" onClick={() => window.open("https://forms.gle/oQQsVT4LukgyNXgP9", "_blank")} />
      </ul>
    </div>
  );
};

export default MobileMenu;
