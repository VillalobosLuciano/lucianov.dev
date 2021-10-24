import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-6 text-gray-300 md:justify-start md:space-x-3 md:order-2">
      <a
        href="https://github.com/VillalobosLuciano"
        target="_blank"
        rel="noreferrer"
        className="p-2 transition-colors bg-yellow-600 rounded-full bg-opacity-30 hover:text-gray-200"
      >
        <FaGithub />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="p-2 transition-colors bg-yellow-600 rounded-full bg-opacity-30 hover:text-gray-200"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/lucianovillalobos"
        target="_blank"
        rel="noreferrer"
        className="p-2 transition-colors bg-yellow-600 rounded-full bg-opacity-30 hover:text-gray-200"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
