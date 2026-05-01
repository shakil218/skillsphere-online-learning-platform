"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "My Profile", path: "/profile" },
  ];

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      {links.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={`transition ${
              isActive(link.path)
                ? "text-primary font-semibold border-b-2 border-primary"
                : "bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] bg-clip-text text-transparent hover:text-primary"
            }`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;