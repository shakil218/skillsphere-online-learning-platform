"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import userFallbackImg from "@/assets/profile.png";
import Image from "next/image";

const NavbarClient = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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
          {isPending ? (
            <div className="navbar-end gap-3 text-gray-600">
              <span className="font-semibold">Loading</span>
              <span className="loading loading-dots loading-sm"></span>
            </div>
          ) : user ? (
            <div className="navbar-end gap-2 md:gap-5 items-center">
              <div className="relative inline-flex p-0.5 group shrink-0">
                <div className="relative rounded-full overflow-hidden bg-white p-0.5">
                  <Image
                    src={user?.image || userFallbackImg}
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => await authClient.signOut()}
                className="relative btn bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] text-white rounded-lg px-4 font-bold overflow-hidden shadow-xl"
                suppressHydrationWarning
              >
                <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>

                <span className="relative z-10">Sign Out</span>
              </motion.button>
            </div>
          ) : (
            <div className="navbar-end gap-5">
              <Link href="/signin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative btn bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] text-white rounded-lg px-4 font-bold overflow-hidden shadow-xl"
                  suppressHydrationWarning
                >
                  <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>

                  <span className="relative z-10">Sign In</span>
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarClient;
