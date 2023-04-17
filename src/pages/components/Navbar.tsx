import React from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="relative flex items-center justify-between pt-6 text-sm font-semibold leading-6 text-secondary-700 dark:text-secondary-200 lg:pt-8">
        <div>Logo</div>
        <div className="flex items-center">
          <div className="hidden items-center md:flex">
            <nav>
              <ul className="flex items-center gap-x-8">
                <li className="hover:text-primary-500 dark:hover:text-primary-400">
                  <a href="">Docs</a>
                </li>
                <li className="hover:text-primary-500 dark:hover:text-primary-400">
                  <a href="">Components</a>
                </li>
                <li className="hover:text-primary-500 dark:hover:text-primary-400">
                  <a href="">Blog</a>
                </li>
                <li className="hover:text-primary-500 dark:hover:text-primary-400">
                  <a href="">Showcase</a>
                </li>
              </ul>
            </nav>
            <div className="ml-6 flex items-center border-l border-secondary-200 pl-6 dark:border-secondary-800">
              <button>
                <RiMoonClearFill className="h-5 w-5" />
              </button>
              <a
                href=""
                className="ml-6 block text-secondary-400 hover:text-secondary-500 dark:hover:text-secondary-300"
              >
                <AiFillGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
