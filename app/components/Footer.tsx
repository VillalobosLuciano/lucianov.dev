import Container from "./Container";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto border-t border-opacity-30 border-neptune-500 dark:border-[#f59e0b] dark:border-opacity-30 mt-8">
      <Container>
        <div className="flex items-center justify-between px-4 py-4 lg:pt-8 lg:pb-10">
          <p className="text-base text-center text-gray-400">
            Luciano Villalobos • {new Date().getFullYear()}
          </p>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  );
}
