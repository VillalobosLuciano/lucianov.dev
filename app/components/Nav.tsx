import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "../config/routes";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import ThemeSwitch from "./ThemeSwitch";

const defaultRoutes = [routes.home, routes.projects, routes.thoughts];

export default function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const currPathName = router.pathname;
  const routesAsArr = Object.keys(routes).map((r) => routes[r]);
  const remainingRoutes = defaultRoutes.filter((r) => r.path !== currPathName);

  currPathName === "/"
    ? "Home"
    : routesAsArr
        .filter((r) => r.path !== "/")
        .find((r) => currPathName.includes(r.path))?.label;

  return (
    <div className="max-w-4xl px-4 py-4 mx-auto border-b border-gray-200 lg:pt-8 lg:pb-6 dark:border-gray-700">
      {/* Mobile nav */}
      <div className="fixed inset-x-0 top-0 z-50 grid grid-cols-1 px-4 py-1 bg-white border-b border-gray-200 dark:border-gray-700 bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur-sm dark:bg-gray-900 md:hidden">
        <div className="flex justify-between pr-2">
          <div className="inline-flex items-center mx-4 text-base font-medium tracking-wider md:mx-0">
            <span
              onClick={() => router.push("/")}
              className="px-2 py-1 text-blue-500 bg-blue-300 rounded cursor-pointer bg-opacity-20 dark:text-yellow-500 dark:bg-yellow-300 dark:bg-opacity-10"
            >
              LV
            </span>
          </div>
          <div>
            <ThemeSwitch />
            <div className="inline-flex">
              <button
                className="px-2 pt-1 -my-2"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <BiX className="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <BiMenuAltRight
                    className="block w-6 h-6"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {isExpanded && (
          <div className="w-full mt-2 bg-gray-900 bg-opacity-10" />
        )}
        {isExpanded &&
          remainingRoutes.map((route) => {
            const defaultClasses = `flex font-sans items-center pl-4 py-4 font-semibold text-sm text-opacity-80`;

            return (
              <Link href={route.path} key={route.path}>
                <a className={`${defaultClasses}`}>{route.label}</a>
              </Link>
            );
          })}
      </div>
      {/* End mobile nav */}
      {/* Desktop nav */}
      <div className="justify-between hidden w-full max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-4xl xl:px-0 md:flex">
        <div className="flex items-center mx-4 text-lg font-semibold tracking-wider md:mx-0">
          <span
            onClick={() => router.push("/")}
            className="px-2 py-1 ml-2 text-blue-500 bg-blue-300 rounded cursor-pointer bg-opacity-20 dark:text-yellow-500 dark:bg-yellow-300 dark:bg-opacity-10"
          >
            LV
          </span>
        </div>
        <div className="flex space-x-6">
          {defaultRoutes.map((route) => {
            const isActive = route.path === router.pathname;
            const defaultClasses = `px-6 dark:text-gray-200 text-gray-500 font-semibold flex items-center justify-center text-sm hover:text-gray-600 dark:hover:text-white`;
            const activeClasses = `text-blue-500 bg-blue-300 bg-opacity-20 dark:bg-opacity-10 dark:text-yellow-500 dark:bg-yellow-300 rounded`;
            return (
              <Link href={route.path} key={route.path}>
                <a
                  className={`${defaultClasses} ${
                    isActive ? activeClasses : defaultClasses
                  }`}
                >
                  {route.label}
                </a>
              </Link>
            );
          })}
        </div>
        <ThemeSwitch />
        {/* End desktop nav */}
      </div>
    </div>
  );
}
