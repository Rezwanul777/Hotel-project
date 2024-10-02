import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import AvaterImg from "../assets/commentor.png";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

const navLists = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (error) {
      console.error("Failed to logout:", err);
    }
  };

  return (
    <header className="bg-white py-6 border">
      <nav className="container mx-auto flex justify-between px-8">
        <a href="">
          <img src="/logo.png" alt="logo" className="h-12" />
        </a>
        <ul className="sm:flex hidden items-center gap-8">
          {navLists.map((list, index) => (
            <li key={index}>
              <NavLink
                to={`${list.path}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          {user && user?.role === "user" ? (
            <li className="flex gap-3 items-center">
              <img src={AvaterImg} alt="" className="size-8" />
              <button
                onClick={handleLogout}
                className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {/* admin based role */}
          {user && user.role === "admin" && (
            <li className="flex items-center gap-3">
              <img src={AvaterImg} alt="" className="size-8" />
              <Link to="/dashboard">
                <button className="bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm">
                  Dashboard
                </button>
              </Link>
            </li>
          )}
        </ul>
        {/* toggle menu */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm  text-gray-500 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <IoClose className="size-6" />
            ) : (
              <IoMenuSharp className="size-6" />
            )}
          </button>
        </div>
      </nav>
      {/* mobile menu item */}
      {isMenuOpen && (
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
          {navLists.map((list, index) => (
            <li className="mt-5 px-4" key={index}>
              <NavLink
                to={`${list.path}`}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          <li className="mt-5 px-4">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
