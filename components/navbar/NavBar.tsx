import { motion } from "framer-motion";
import Link from "next/link";

let links = [
  {
    to: "/",
    label: "home",
  },
  {
    to: "/register",
    label: "register",
  },
  {
    to: "/login",
    label: "login",
  },
  {
    to: "/profile",
    label: "profile",
  },
  {
    to: "/history",
    label: "history",
  },
];
const NavBar = () => {
  return (
    <motion.nav initial={{}}>
      <ul className="flex">
        {links.map((link) => (
          <li key={link.to}>
            <Link href={`${link.to}`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
