"use client";

import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "phosphor-react";
import { Fragment, useState } from "react";
import deepdiveLogoSVG from "../../assets/brand/deepdive-logo-white.svg";
import { Button } from "../_Primitives/Button";

function Header() {
  const [isIconHovering, setIsIconHovering] = useState(false);

  return (
    <Popover
      className={
        "fixed top-0 z-50 mx-auto flex h-[90px] items-center bg-brand-primary-blue transition-all duration-500"
      }
    >
      <header className="mx-auto w-screen px-10 lg:px-24">
        <div className="mx-auto flex items-center justify-between py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"}>
              <Image
                id="logo-image"
                src={deepdiveLogoSVG}
                alt="Deepdive logo"
                width={180}
                height={48}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button
              id="menu-button"
              className="focus:ring-offset-background focus:primary-blue-500 hover:bg-primary-blue-500 flex cursor-pointer items-center rounded-xl px-2 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
              onMouseEnter={() => setIsIconHovering(true)}
              onMouseLeave={() => setIsIconHovering(false)}
            >
              <List
                size={32}
                color={
                  isIconHovering
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(255, 255, 255, 1)"
                }
                weight="bold"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <nav className="hidden items-center space-x-10 lg:flex">
            <Link href={"/"}>
              <span className="font-sans text-sm font-medium transition-all hover:opacity-80">
                Benefício pela empresa
              </span>
            </Link>
            <Link href={"/"}>
              <Button className="rounded-lg">Testar Agora Gratuitamente</Button>
            </Link>
          </nav>
        </div>
      </header>

      <Transition
        as={Fragment}
        enter="duration-300 ease-out"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform rounded-b-xl bg-black bg-opacity-30 p-0 backdrop-blur-md transition lg:hidden"
        >
          <div className="bg-background divide-y-2 divide-gray-50 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-7 py-8">
              <div className="flex items-center justify-end">
                <div className="">
                  <Popover.Button
                    id="close-menu-button"
                    className="focus:ring-offset-background focus:primary-blue-500 hover:bg-primary-blue-500 flex items-center rounded-xl px-2 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onMouseEnter={() => setIsIconHovering(true)}
                    onMouseLeave={() => setIsIconHovering(false)}
                  >
                    <X
                      size={32}
                      color={"#FFFFFF"}
                      weight="bold"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <nav className="mt-6 flex flex-col items-end gap-y-3">
                {/* {links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <span
                      className={twMerge(
                        "cursor-pointer font-sans text-lg font-semibold text-white transition-all duration-500",
                        pathname === link.href && "text-primary-blue-500",
                      )}
                    >
                      {link.label}
                    </span>
                    {link.icon}
                  </Link>
                ))} */}
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
