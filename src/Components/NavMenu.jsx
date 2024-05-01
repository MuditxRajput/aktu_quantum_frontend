import React from "react";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();

  const MenuItem = React.memo(({ text }) => {
    const handleClick = () => {
      if (text === "Request-pdf") {
        // Open Google Form link in a new tab
        window.open("https://forms.gle/oQQsVT4LukgyNXgP9", "_blank");
      } else {
        // Navigate to the corresponding route
        navigate(`/${text.toLowerCase()}`);
      }
    };

    return (
      <li className="hover:text-orange-600" onClick={handleClick}>
        {text}
      </li>
    );
  });

  return (
    <div className="hidden sm:block">
      <ul className="flex sm:gap-10 text-black font-Roboto font-semibold cursor-pointer">
        {/* <MenuItem text="Home" /> */}
        {/* <MenuItem text="Post" /> */}
        <MenuItem text="About" />
        <MenuItem text="Contact" />
        <MenuItem text="Privacy" />
        <MenuItem text="Disclaimer" />
        <MenuItem text="Request-pdf" />
      </ul>
    </div>
  );
};

export default NavMenu;
