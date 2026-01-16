import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Products", path: "/products" },
    { title: "Teams", path: "/teams" },
    { title: "Blog", path: "/blog" },
  ];

  const { username, logout } = useAuthStore();

  return (
    <nav className="bg-spice-dark/95 text-spice-cream fixed w-full z-50 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                className="h-12 w-auto rounded-full border-2 border-spice-gold transition-transform duration-300 group-hover:scale-105"
                src="/JPI-logo.jpg"
                alt="Japko Pangan Indonesia Logo"
              />
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-spice-gold transition-colors">
                Japko{" "}
                <span className="block sm:inline sm:ml-1">
                  <p className="text-spice-gold">Pangan Indonesia</p>
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-spice-red text-white shadow-sm"
                        : "text-gray-300 hover:text-spice-gold hover:bg-white/10"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {username ? (
              <div className="flex items-center gap-4">
                <span className="text-white/80">
                  Welcome,{" "}
                  <span className="font-semibold text-spice-gold">
                    {username}
                  </span>
                </span>
                <button
                  onClick={logout}
                  className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 hover:text-spice-red transition border border-white/5"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-spice-gold font-medium transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-spice-red text-white px-5 py-2 rounded-full hover:bg-red-700 transition shadow-md font-medium"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-spice-red/80 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-spice-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-spice-dark/95 backdrop-blur-md"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-spice-red text-white"
                      : "text-gray-300 hover:text-spice-gold hover:bg-white/10"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-700 space-y-3">
              {username ? (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-white/10 text-white hover:bg-white/20"
                >
                  Logout ({username})
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-spice-red text-white hover:bg-red-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
