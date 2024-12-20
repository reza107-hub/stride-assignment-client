import { Link } from "react-router-dom";

const NavBar = () => {
    const nabList = [
      { label: "Home", href: "/" },
      { label: "Products", href: "/about" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ];
  return (
    <div className="navbar bg-primary text-white max-w-[90%] mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {nabList.map((item, i) => (
              <li key={i}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TechOrbit</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          {nabList.map((item, i) => (
            <li key={i}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn-main">New Here?</a>
      </div>
    </div>
  );
};

export default NavBar
