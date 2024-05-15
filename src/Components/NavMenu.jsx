import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const MenuItem = React.memo(({ text, onClick }) => {
    return (
      <li className="hover:text-orange-600 cursor-pointer" onClick={onClick}>
        {text}
      </li>
    );
  });

  // Dropdown menu component
  const DropdownMenu = () => (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="hover:text-orange-600 cursor-pointer">
        Important
      </div>
      {isOpen && (
        <ul className="absolute bg-white shadow-lg mt-1 rounded">
          <MenuItem text="Result" onClick={() => handleNavigate('/result')} />
          <MenuItem text="Challenge" onClick={() => handleNavigate('/challenge')} />
          <MenuItem text="Quantum" onClick={() => handleNavigate('/aktuQuantum')} />
          <MenuItem text="Dmca" onClick={() => handleNavigate('/dmca')} />
        </ul>
      )}
    </div>
  );

  // Navigation handler including closing the dropdown
  const handleNavigate = (path) => {
    setIsOpen(false); // Close dropdown when an item is clicked
    navigate(path);
  };

  return (
    <div className="hidden sm:block">
      <ul className="flex gap-10 text-black font-Roboto font-semibold">
        <DropdownMenu />
        <MenuItem text="Post" onClick={() => navigate('/first')} />
        <MenuItem text="About" onClick={() => navigate('/about')} />
        <MenuItem text="Contact" onClick={() => navigate('/contact')} />
        <MenuItem text="Privacy" onClick={() => navigate('/privacy')} />
        <MenuItem text="Disclaimer" onClick={() => navigate('/disclaimer')} />
       
        <MenuItem text="Request-pdf" onClick={() => window.open("https://forms.gle/oQQsVT4LukgyNXgP9", "_blank")} />
      </ul>
    </div>
  );
};

export default NavMenu;
