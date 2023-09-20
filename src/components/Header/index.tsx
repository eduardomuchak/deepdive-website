"use client";

import { Popover, Transition } from "@headlessui/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { List, X } from "phosphor-react";
import { Fragment, useState } from "react";
import deepdiveLogoSVG from "../../assets/brand/deepdive-logo-white.svg";
import { Button } from "../_Primitives/Button";

import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";

export function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const [isIconHovering, setIsIconHovering] = useState(false);
  const locale = useLocale();

  const handleChangeLanguage = () => {
    if (locale === "pt") {
      router.push("en");
    } else if (locale === "en") {
      router.push("pt");
    }
  };

  return (
    <Popover
      className={
        "fixed top-0 z-50 mx-auto flex w-full items-center bg-brand-primary-blue transition-all duration-500"
      }
    >
      <header className="mx-auto w-[98vw] px-6 lg:px-24">
        <div className="mx-auto flex items-center justify-between py-[17px]">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"}>
              <Image
                id="logo-image"
                src={deepdiveLogoSVG}
                alt="Deepdive logo"
                className="w-[130px] cursor-pointer md:w-[180px]"
              />
            </Link>
          </div>

          <Popover.Button
            id="menu-button"
            className="-my-2 -mr-2 flex items-center rounded-xl border-none bg-brand-primary-blue px-2 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-0 lg:hidden"
            onMouseEnter={() => setIsIconHovering(true)}
            onMouseLeave={() => setIsIconHovering(false)}
          >
            <List
              size={24}
              color={
                isIconHovering
                  ? "rgba(255, 255, 255, 0.8)"
                  : "rgba(255, 255, 255, 1)"
              }
              weight="bold"
              aria-hidden="true"
            />
          </Popover.Button>

          <nav className="hidden items-center space-x-10 lg:flex">
            <Link
              href={"https://wa.me/message/BODFB27WWRR5H1"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-sans text-sm font-medium transition-all hover:opacity-80">
                {t("talkToUs")}
              </span>
            </Link>
            <Link
              rel="noopener noreferrer"
              href={"http://app.deepdivetech.ai"}
              target="_blank"
            >
              <Button className="rounded-lg">{t("try")}</Button>
            </Link>
            <Switch
              checked={locale === "pt" ? true : false}
              onCheckedChange={handleChangeLanguage}
            />
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
          className="absolute inset-x-0 top-0 h-screen origin-top-right transform rounded-b-xl bg-transparent p-0 transition lg:hidden"
        >
          <div className="mx-auto flex items-center justify-end px-6 py-5">
            <Popover.Button
              id="close-menu-button"
              className="-my-2 -mr-2 flex items-center rounded-xl border-none bg-brand-primary-blue px-2 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-0 lg:hidden"
              onMouseEnter={() => setIsIconHovering(true)}
              onMouseLeave={() => setIsIconHovering(false)}
            >
              <X
                size={24}
                color={
                  isIconHovering
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(255, 255, 255, 1)"
                }
                weight="bold"
                aria-hidden="true"
                style={{
                  outline: "none",
                }}
              />
            </Popover.Button>
          </div>
          <nav className="flex h-full flex-col items-center justify-center bg-brand-primary-blue">
            <div className="flex grow-[5] items-center justify-center">
              <Link
                href={"https://wa.me/message/BODFB27WWRR5H1"}
                rel="noopener noreferrer"
                target="_blank"
                className="font-sans text-[22px] font-normal transition-all hover:opacity-80"
              >
                {t("talkToUs")}
              </Link>
            </div>
            {/* <Link
              rel="noopener noreferrer"
              href={"http://app.deepdivetech.ai"}
              target="_blank"
              className="mx-auto flex flex-grow items-start justify-center"
            >
              <Button className="max-w-[234px]">
                Testar Agora Gratuitamente
              </Button>
            </Link> */}
          </nav>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
