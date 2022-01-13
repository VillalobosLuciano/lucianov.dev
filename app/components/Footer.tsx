import Container from "./Container";
import IconButton from "./IconButton";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto mt-8 border-t border-opacity-30 border-neptune-500 dark:border-amber-500/30">
      <Container>
        <div className="flex items-center justify-between px-4 py-4 lg:pt-8 lg:pb-10">
          <p className="text-base text-center text-gray-300/60">
            Luciano Villalobos • {new Date().getFullYear()}
          </p>
          <div className="flex space-x-2 text-lg text-gray-400 dark:text-gray-300">
            <IconButton>
              <FaGithub className="w-4 h-4" />
            </IconButton>
            <IconButton>
              <FaTwitter className="w-4 h-4" />
            </IconButton>
          </div>
        </div>
      </Container>
    </footer>
  );
}
