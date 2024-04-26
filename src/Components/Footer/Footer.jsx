import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="footer flex flex-col justify-center md:flex-row md:justify-between items-center p-10 bg-blue-200 text-base-content">
        <aside className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-3xl font-semibold font-playfair text-center">
              BS travels
            </h1>
          </div>
          <div className="font-playfair text-center">
            <h1>Providing best tour and travel deals</h1>
          </div>
          <div className="flex justify-center items-center gap-5 my-4">
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
              <FaGithub />
            </div>
          </div>
        </aside>

        <nav className="font-playfair">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Tours</a>
          <a className="link link-hover">Hotel</a>
          <a className="link link-hover">Transport</a>
         
        </nav>
        <nav className="font-playfair">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          
        </nav>
        <nav className="font-playfair">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-200 py-4 px-10">
        <p>Copyright © 2024</p>
        <p> All right reserved by BS Travels</p>
      </div>
    </footer>
  );
};

export default Footer;
