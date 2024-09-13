import { IconArrowRight, IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

const links = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-yadav-bb658b25b/",
    icon: <IconBrandLinkedin/>,
  },
  {
    title: "Github",
    href: "https://github.com/AryanYadav-git",
    icon: <IconBrandGithub/>,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/AryanYadav466",
    icon: <IconBrandX/>,
  },
  {
    title: "Leetcode",
    href: "https://leetcode.com/u/aryanyadav23",
    icon: <IconBrandLeetcode/>,
  },
]

const Navbar = () => {
  return (
    <div className=" w-full px-4 py-2 rounded-xl flex justify-between items-center ">
      <div className="flex gap-1 md:gap-4 ">
      <div className="flex px-4 border md:w-40 p-1 rounded-3xl bg-white text-dark-200">
        <Link href="/" className="flex w-full justify-between font-semibold">
          Home <IconArrowRight className="font-light hidden md:block "/>
        </Link>
      </div>
      <div className="flex px-4 md:w-32 p-1 rounded-3xl text-fuchsia-200">
        <Link href="/blog" className="flex w-full justify-between font-semibold ">
          <span className="hidden md:block">Read Blogs</span><span className="block md:hidden ">Blogs</span> 
        </Link>
      </div>
      </div>
      <div className="flex gap-6 ">
        {
          links.map(({ title, href, icon }) => (
            <Link className="text-3xl font-semibold" target="_blank" href={href} title={title} key={title}>
              {icon}
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Navbar