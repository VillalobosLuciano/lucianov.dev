import Container from "./Container";
import IconButton from "./IconButton";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto mt-8 border-t border-teal-600/30 dark:border-amber-500/30">
      <Container>
        <div className="flex items-center justify-between px-4 py-5 lg:pt-8 lg:pb-10">
          <p className="text-sm text-center text-gray-400 lg:text-base">
            Luciano Villalobos • {new Date().getFullYear()}
          </p>
          <div className="flex space-x-2 text-lg text-gray-400 dark:text-gray-300">
            <IconButton href="mailto:lucianov.dev@gmail.com">
              <FiMail className="w-5 h-5" />
            </IconButton>
            <IconButton href="https://github.com/VillalobosLuciano">
              <FaGithub className="w-5 h-5" />
            </IconButton>
            <IconButton href="https://twitter.com/lucianov0">
              <FaTwitter className="w-5 h-5" />
            </IconButton>
          </div>
        </div>
      </Container>
    </footer>
  );
}
