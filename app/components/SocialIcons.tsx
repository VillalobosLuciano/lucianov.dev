import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-3 text-gray-300 md:justify-start md:space-x-2 md:order-2">
      <a
        href="https://github.com/VillalobosLuciano"
        target="_blank"
        rel="noreferrer"
        className="p-2 transition-opacity bg-yellow-700 border border-yellow-500 border-opacity-50 rounded-full hover:bg-opacity-10 bg-opacity-20 hover:shadow-medium hover:bg-yellow-600 hover:text-gray-200"
      >
        <FaGithub />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="p-2 transition-opacity bg-yellow-700 border border-yellow-500 border-opacity-50 rounded-full hover:bg-opacity-10 bg-opacity-20 hover:shadow-medium hover:bg-yellow-600 hover:text-gray-200"
      >
        <FaTwitter />
      </a>
    </div>
  );
}
