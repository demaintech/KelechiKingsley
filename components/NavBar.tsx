import Link from "next/link";

const links = [
    {
        name: "Home",
        path: "/",
    },

    // {
    //     name: "About me",
    //     path: "/about",
    // },

    // {
    //     name: "Services",
    //     path: "/service",
    // },

    // {
    //     name: "Resume",
    //     path: "/resume",
    // },

    {
        name: "My Projects",
        path: "/projects",
    },

    {
        name: "Contact me",
        path: "/contact",
    },
];



const NavBar = () => {
  return (
    <nav className="flex gap-4 text-lg text-gray-300 list-none font-bold">
        {links.map((link, index) =>{
            return <Link href={link.path} key={index}>{link.name}</Link>
        })}
    </nav>
  )
}

export default NavBar;