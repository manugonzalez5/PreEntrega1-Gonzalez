import { FaCartShopping } from "react-icons/fa6";

import "./navbar.css";
export const Navbar = () => {
  const stylesImage = {
    margin: "10px",
    width: "100px",
    height: "75px",
  };

  return (
    <>
      <div className="container-navbar">
        <img
          src="https://res.cloudinary.com/dcy3epfdp/image/upload/v1727995122/png-transparent-backup-computacion-interactivity-computer-icons-computer-software-icon-interactive-text-computer-logo_scajs9.png"
          alt=""
          style={stylesImage}
        />
        <FaCartShopping />
      </div>
    </>
  );
};
