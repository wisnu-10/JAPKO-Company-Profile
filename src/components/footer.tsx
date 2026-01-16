import {
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-spice-dark text-white border-t-4 border-spice-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <img
                src="/JPI-logo.jpg"
                alt="Logo"
                className="h-8 w-8 rounded-full"
              />
              Japko
              <span className="text-spice-gold"> Pangan Indonesia </span>
            </h2>
            <p className="text-gray-300 mb-4 max-w-sm">
              Bringing high-quality, convenient, and innovative food products to
              the Indonesian market.
            </p>
            <div className="flex gap-4">
              <a
                href="https://shopee.co.id/gurihyacgk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#EE4D2D] transition duration-300"
              >
                <SiShopee size={24} />
              </a>
              <a
                href="https://www.tokopedia.com/gurihya/product"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00AA5B] transition duration-300"
              >
                <img
                  src="/public/tokped-icon.png"
                  alt="Tokopedia"
                  className="w-6 h-6 grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/gurihya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#C13584] transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-spice-gold transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-spice-gold transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-spice-gold transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-spice-gold transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-spice-gold mt-1" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-spice-gold" />
                <span>gurihyaseasoning@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-spice-gold" />
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Wisnu Bintoro. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
