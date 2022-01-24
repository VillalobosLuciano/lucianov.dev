import Image from "next/image";
import lvLight from "../public/lvLight.svg";
import lvDark from "../public/lvDark.svg";
import { useTheme } from "next-themes";

export default function Avatar({ name, image }) {
  const { theme, resolvedTheme } = useTheme();
  const logoHandler = () => {
    return theme === "light" ? lvLight : lvDark;
  };
  return (
    <div className="flex items-center">
      <div className="relative w-5 h-5 mr-2 -mb-0.5">
        <Image src={logoHandler()} layout="fill" alt={name} />
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-300">{name}</div>
    </div>
  );
}
