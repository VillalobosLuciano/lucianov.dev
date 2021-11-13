import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-3 text-primaryLight dark:text-gray-300 md:justify-start md:space-x-2 md:order-2">
      <a
        href="https://github.com/VillalobosLuciano"
        target="_blank"
        rel="noreferrer"
        className="
        p-2 
        border 
        rounded-xl 
        mb-1.5 
        dark:bg-opacity-20 
        dark:border-opacity-60 
        dark:bg-yellow-900 
        dark:border-yellow-500 
        dark:hover:bg-opacity-30 
        dark:hover:bg-yellow-600 
        dark:hover:text-gray-100 
        border-opacity-60 
        bg-neptune-500 
        hover:bg-opacity-20 
        bg-opacity-10 
        hover:border-opacity-60 
        border-neptune-500 
        hover:text-gray-500 
        transition  
        duration-300
        "
      >
        <FaGithub />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="
        p-2 
        border 
        rounded-xl 
        mb-1.5 
        dark:bg-opacity-20 
        dark:border-opacity-60 
        dark:bg-yellow-900 
        dark:border-yellow-500 
        dark:hover:bg-opacity-30 
        dark:hover:bg-yellow-600 
        dark:hover:text-gray-100 
        border-opacity-60 
        bg-neptune-500 
        hover:bg-opacity-20 
        bg-opacity-10 
        hover:border-opacity-60 
        border-neptune-500 
        hover:text-gray-500 
        transition  
        duration-300
        "
      >
        <FaTwitter />
      </a>
    </div>
  );
}
