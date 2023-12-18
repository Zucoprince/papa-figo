import "../Styles/Header.css";
import "../Styles/HeaderMobile.css"
import figo from "../Images/papa-figo-logo-nobg.png";

export default function Header() {
  return (
    <section className="container_header">
      <div className="container_top_ten">
        <button className="header_top_ten">Papa 10!</button>
      </div>
      <div className="container_logo">
      <p className="header_title" id="papa">PAPA</p>
        <img src={figo} alt="Logo Papa-Figo" className="header_img" />
        <p className="header_title" id="figo">FIGO</p>
      </div>
      <div className="container_login">
        <button className="header_button_login">Login</button>
      </div>
    </section>
  );
}
