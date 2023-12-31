import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t-2 border-[#33353F] h-32 w-full flex flex-col items-center justify-center gap-4">
      <div className="flex gap-5 text-white">
        <Link href={"https://github.com/ko9612"} aria-label="github">
          <BsGithub className="w-8 h-8" />
        </Link>
        <Link href={"https://velog.io/@ko9612/posts"} aria-label="velog">
          <SiVelog className="w-8 h-8" />
        </Link>
      </div>
      <p className="text-sm text-white/50">Ko Hana ©2023</p>
    </footer>
  );
};

export default Footer;
