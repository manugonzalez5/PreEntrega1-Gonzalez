import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Buscador } from "../../common/buscador/Buscador";
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
          src="https://res.cloudinary.com/dcy3epfdp/image/upload/v1728261052/png-transparent-backup-computacion-interactivity-computer-icons-computer-software-icon-interactive-text-computer-logo-removebg-preview_ehumzu.png"
          alt=""
          style={stylesImage}
        />
        <ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
          <li>PRODUCTOS</li>
          <li>ARMA TU PC</li>
          <li>AYUDA</li>
          <li>CONTACTO</li>
        </ul>
        <div>
          <Buscador />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>EPIC HARDWARE</h1>
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </>
  );
};
