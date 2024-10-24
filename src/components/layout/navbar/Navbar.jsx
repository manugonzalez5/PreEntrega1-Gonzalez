import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Buscador } from "../../common/buscador/Buscador";
import SimpleBottomNavigation from "../../common/simplebottomnavigation/SimpleBottomNavigation";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const stylesImage = {
    margin: "10px",
    width: "100px",
    height: "75px",
  };

  return (
    <>
      <div className="container-navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dcy3epfdp/image/upload/v1728261052/png-transparent-backup-computacion-interactivity-computer-icons-computer-software-icon-interactive-text-computer-logo-removebg-preview_ehumzu.png"
            alt=""
            href="#"
            style={stylesImage}
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ margin: "10px" }}>EPIC HARDWARE</h1>
        </div>
        <div>
          <SimpleBottomNavigation />
        </div>

        <div>
          <Buscador />
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </>
  );
};

export default Navbar;
