import Container from "./Container";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto mt-20 border-t border-gray-700">
      <Container>
        <div className="px-4 py-8 lg:pt-10 lg:pb-12 md:flex md:items-center md:justify-between">
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
