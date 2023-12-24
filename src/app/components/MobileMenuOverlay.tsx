import NavLink from "./NavLink";
import { NavArrType, NavLinksArr } from "../data/NavArray";

const MobileMenuOverlay = () => {
  return (
    <ul className="flex flex-col items-center md:hidden">
      {NavLinksArr.map((link: NavArrType) => (
        <li key={link.title} className="w-full">
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuOverlay;
