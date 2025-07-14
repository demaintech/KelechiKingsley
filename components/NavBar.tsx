const links = [
    {
        name: "Home",
        path: "/",
    },

    {
        name: "About me",
        path: "/about",
    },

    {
        name: "Services",
        path: "/service",
    },

    {
        name: "Resume",
        path: "/resume",
    },

    {
        name: "Projects",
        path: "/work",
    },

    {
        name: "Contact",
        path: "/contact",
    },
];



const NavBar = () => {
  return (
    <nav className="flex gap-4 text-lg text-gray-300 list-none font-bold">
        {links.map((link, index) =>{
            return <li key={index}>{link.name}</li>
        })}
    </nav>
  )
}

export default NavBar;