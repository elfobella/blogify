import React from "react";
import { RiMoonClearFill, RiMore2Line } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { MdCreate } from "react-icons/md";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="relative flex items-center justify-between pt-2 text-sm font-semibold leading-6 text-secondary-700 dark:text-secondary-200 lg:pt-4">
        <h1 className="flex items-center text-xl font-bold">Blogify</h1>
        <div className="flex items-center">
          <div className="flex gap-x-3 md:hidden">
            <button className="flex h-10 items-center gap-x-2 rounded-full border border-secondary-200 px-3 shadow-sm hover:text-primary-500 dark:hover:text-primary-400">
              <MdCreate />
            </button>
            <button className="h-10 rounded-full border border-secondary-200 px-3 shadow-sm hover:text-primary-500">
              <RiMore2Line />
            </button>
          </div>
          <div className="hidden items-center md:flex">
            <nav>
              <ul className="flex items-center gap-x-8">
                <Link href="/write">
                  <li className="relative flex h-10 cursor-pointer items-center gap-x-2 rounded-lg border border-secondary-200 bg-white px-4 shadow-sm hover:text-primary-500  hover:shadow-primary-500/30 dark:hover:text-primary-400">
                    <MdCreate />
                    <span>Write</span>
                  </li>
                </Link>
              </ul>
            </nav>
            <div className="ml-6 flex items-center gap-x-3 border-l border-secondary-200 pl-6 dark:border-secondary-800">
              <button>
                <RiMoonClearFill className="h-5 w-5" />
              </button>
              <button
                onClick={() => void signIn()}
                className="hover:text-primary-500"
              >
                {!session?.user && "Log in"}
              </button>
              {session?.user.image ? (
                <div className="relative flex justify-center">
                  <Image
                    alt={`Profile Pic`}
                    src={session.user.image}
                    width={28}
                    height={28}
                    className="cursor-pointer rounded-full shadow-sm hover:shadow-primary-500"
                  />
                  <div className="absolute top-8 w-[72px] rounded-lg bg-secondary-200/80 py-2 ">
                    <button
                      onClick={() => void signOut()}
                      className="w-full hover:bg-secondary-300"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              ) : (
                session?.user.name
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
