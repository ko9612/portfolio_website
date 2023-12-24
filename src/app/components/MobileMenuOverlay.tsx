import NavLink from "./NavLink";
import { NavArrType, NavLinksArr } from "../data/NavArray";

const MobileMenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden transitu">
      {NavLinksArr.map((link: NavArrType) => (
        <li key={link.title}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuOverlay;
