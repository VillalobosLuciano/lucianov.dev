import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";
import routes from "../config/routes";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import lvLight from "../public/lvLight.svg";
import lvDark from "../public/lvDark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

const defaultRoutes = [routes.home, routes.projects, routes.thoughts];

export default function Navbar() {
  const { theme, resolvedTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const logoHandler = () => {
    return theme === "light" ? lvLight : lvDark;
  };

  return (
    <div className="max-w-4xl px-4 py-4 mx-auto md:border-b md:pt-8 md:pb-6 border-neptune-500 dark:border-amber-500/30">
      {/* Mobile nav */}
      <div className="fixed inset-x-0 top-0 z-50 grid border-opacity-30 grid-cols-1 px-2 py-1.5 border-b border-neptune-500 bg-[#fcf7ed] dark:border-yellow-500 dark:border-opacity-30 bg-opacity-90 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg dark:bg-bgDark md:hidden">
        <div className="flex justify-between pr-2">
          <div className="inline-flex items-center mx-4 text-base font-medium md:mx-0">
            <div
              onClick={() => router.push("/")}
              className="relative w-8 h-8 cursor-pointer"
            >
              <Image alt="lucianov logo" src={logoHandler()} layout="fill" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeSwitch />
            <div className="pt-2 pr-1">
              <button
                className="text-gray-400 transition duration-300 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-100"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <BiX
                    className="block w-8 h-8 border border-opacity-50 rounded-md border-neptune-500 dark:border-yellow-500 dark:border-opacity-80"
                    aria-hidden="true"
                  />
                ) : (
                  <BiMenuAltRight
                    className="block w-8 h-8"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {isExpanded && (
          <div className="h-screen pt-10">
            {defaultRoutes.map((route) => (
              <div
                className="pt-4 pb-2 mx-4 border-b border-opacity-50 bg border-neptune-500 dark:border-yellow-500 dark:border-opacity-30"
                onClick={() => router.push(route.path)}
                key={route.path}
              >
                <p className="my-4 font-sans text-sm font-semibold text-right text-opacity-80">
                  {route.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Desktop nav */}
      <div className="items-center justify-between hidden w-full max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0 md:flex">
        <div className="flex pl-1">
          <div
            onClick={() => router.push("/")}
            className="relative cursor-pointer w-9 h-9"
          >
            <Image alt="lucianov logo" src={logoHandler()} layout="fill" />
          </div>
        </div>
        <div className="flex space-x-6">
          {defaultRoutes.map((route) => {
            const isActive = route.path === router.pathname;
            return (
              <Link href={route.path} key={route.path}>
                <a
                  className={clsx(
                    "px-6 py-2 rounded-md font-semibold text-sm tracking-wide transition duration-300 border-transparent",
                    {
                      "border dark:border-amber-500/20 dark:text-amber-500/90":
                        isActive,
                      "dark:text-gray-300 text-gray-400 hover:text-gray-500 dark:hover:text-gray-200":
                        !isActive,
                    }
                  )}
                >
                  {route.label}
                </a>
              </Link>
            );
          })}
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
}
