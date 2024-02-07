import "../index.css";
import { FaInstagram, FaFacebookSquare, FaYoutube, FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <div className="footer-container">
    <div className="contain-footer">
    <div className="contact-info">
        <h3>Contacto</h3>
        <p>Email: info@musicStore.com</p>
        <p>Teléfono: +123456789</p>
        <p>Dirección: 123 Calle Principal, Ciudad, País</p>
    </div>
    <div className="useful-links">
        <h3>Info</h3>
        <ul>
            <FaInstagram /> 
            <FaFacebookSquare />
            <FaYoutube />
            <FaTwitterSquare />
        </ul>
    </div>
    <div className="legal">
        <h3>Legal</h3>
        <ul>
            <a href="/politica-de-privacidad">Política de privacidad</a>
            <a href="/terminos-de-uso">Términos de uso</a>
        </ul>
    </div>
    </div>
    <h1>Music Store</h1>
</div>

</>
  )
}
