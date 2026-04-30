"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";

const NavbarClient = ({ user }) => {
  return (
    <div className="navbar shadow-md px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] bg-clip-text text-transparent"
          >
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 text-black rounded-box z-1">
            <NavLinks />
          </ul>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="bg-linear-to-br from-indigo-500 to-purple-400 bg-clip-text text-transparent text-xl font-bold"
        >
          SkillSphere
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLinks />
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <Link href="/dashboard" className="btn btn-primary rounded-full px-6">
            Dashboard
          </Link>
        ) : (
          <Link
            href="/login"
            className="btn bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] text-white rounded-lg px-4"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavbarClient;
