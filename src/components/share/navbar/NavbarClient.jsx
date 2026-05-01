"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const NavbarClient = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100/75 backdrop-blur-md text-white shadow-md px-4">
      <div className="navbar max-w-7xl mx-auto">
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
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative btn bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] text-white rounded-lg px-4 font-bold overflow-hidden shadow-xl"
              suppressHydrationWarning
            >
              <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>

              <span className="relative z-10">Login</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarClient;
