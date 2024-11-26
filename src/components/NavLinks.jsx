import { Link } from "react-scroll";

const NavLinks = ({ path, title, links }) => {
  return (
    <Link
      to={path}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="block py-2 pl-3 pr-4 text-gray-400 rounded md:p-1 hover:text-white uppercase font-semibold"
    >
      {title}
    </Link>
  );
};

export default NavLinks;
