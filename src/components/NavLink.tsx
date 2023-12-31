import Link from "next/link";
import { NavArrType } from "../data/NavArray";

const NavLink = ({ href, title }: NavArrType) => {
  return (
    <Link
      href={href}
      className="block py-3 px-4 text-white/70 md:text-xl md:p-0 hover:text-white
       hover:bg-white/10 md:hover:bg-transparent text-center hover:scale-110 transition-all transform"
    >
      {title}
    </Link>
  );
};

export default NavLink;
