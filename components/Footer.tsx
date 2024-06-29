import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="backdrop-blur-sm box-border  bg-black border border-slate-600 border-solid text-slate-200 py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg  text-emerald-500 font-bold">
          Your Ultimate Destination for Gaming Chairs
        </p>
        <p className="mt-2">
          We offer a wide range of premium gaming chairs to elevate your gaming
          experience. Explore our collection and find the perfect chair that
          suits your style and comfort.
        </p>
        <div className="mt-4">
          <p className="text-sm">📍 Based in Morocco</p>
          <p className="text-sm">
            🏠 Address: 123 Gaming Street, Casablanca, Morocco
          </p>
          <p className="text-sm">📞 Phone: +212 6 00 00 00 00</p>
          <p className="text-sm">✉️ Email: support@gamingchairs.ma</p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-black transition ese-in duration-300 "
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-white hover:text-black transition ese-in duration-300 "
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-black transition ese-in duration-300 "
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            className="text-white hover:text-black transition ese-in duration-300 "
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="mt-4">
          <p className="text-sm">
            © 2024 Gaming Chairs Store. All rights reserved.
          </p>
          <p className="text-xs">Designed and Developed with ❤️ in Morocco</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
