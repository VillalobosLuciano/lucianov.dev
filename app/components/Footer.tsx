import Container from "./Container";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto border-t border-bgAccentLight dark:border-gray-700 lg:mt-20">
      <Container>
        <div className="px-4 pt-8 pb-10 md:flex md:items-center md:justify-between">
          <SocialIcons />
          <div className="mt-4 md:mt-0 md:order-1">
            <p className="text-base text-center text-gray-400">
              Luciano Villalobos • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
