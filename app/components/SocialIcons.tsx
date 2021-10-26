import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-3 text-primaryLight dark:text-gray-300 md:justify-start md:space-x-2 md:order-2">
      <a
        href="https://github.com/VillalobosLuciano"
        target="_blank"
        rel="noreferrer"
        className="p-2 border rounded-full border-opacity-80 dark:bg-opacity-20 dark:border-opacity-80 bg-accentLight bg-opacity-10 border-accentLight dark:bg-yellow-700 dark:border-yellow-500 hover:bg-opacity-10 hover:shadow-medium dark:hover:bg-yellow-600 dark:hover:text-gray-200"
      >
        <FaGithub />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="p-2 border rounded-full border-opacity-80 dark:bg-opacity-20 dark:border-opacity-80 bg-accentLight bg-opacity-10 border-accentLight dark:bg-yellow-700 dark:border-yellow-500 hover:bg-opacity-10 hover:shadow-medium dark:hover:bg-yellow-600 dark:hover:text-gray-200"
      >
        <FaTwitter />
      </a>
    </div>
  );
}
