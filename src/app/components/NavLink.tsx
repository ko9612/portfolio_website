import Link from "next/link";
import { NavArrType } from "../data/NavArray";

const NavLink = ({ href, title }: NavArrType) => {
  return (
    <Link
      href={href}
      className="block py-2 px-4 text-white/70 md:text-xl md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
