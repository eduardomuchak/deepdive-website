"use client";

import deepdiveLogoSVG from "@/assets/brand/deepdive-logo-white.svg";
import instagramLogo from "@/assets/icons/instagram.svg";
import linkedInLogo from "@/assets/icons/linkedin.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mx-auto w-full px-6 py-5 lg:px-24 lg:pb-0">
      <div className="mx-auto hidden min-h-[120px]  w-full grid-flow-row grid-cols-1 sm:grid-cols-4 md:grid">
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Image
              id="logo-image"
              src={deepdiveLogoSVG}
              alt="Deepdive logo"
              className="w-[130px] cursor-pointer md:w-[180px]"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <ul className="mt-9 flex flex-row flex-wrap gap-2 lg:gap-5">
            <li>
              <Link
                className="font-sans text-sm font-normal transition-all hover:opacity-80"
                href={"/becomeateacher"}
              >
                {t("beATeacher")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="mt-9 flex flex-col space-y-2">
            <li>
              <Link
                className="font-sans text-sm font-normal transition-all hover:opacity-80"
                href={"/refund"}
              >
                {t("refund")}
              </Link>
            </li>
            <li>
              <Link
                className="font-sans text-sm font-normal transition-all hover:opacity-80"
                href={"/becomeateacher"}
              >
                {t("benefits")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.linkedin.com/company/deepdive-school"}
          >
            <Image
              src={linkedInLogo}
              alt="Deepdive logo"
              width={30}
              className="cursor-pointer"
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.instagram.com/deepdive-school"}
          >
            <Image
              src={instagramLogo}
              alt="Deepdive logo"
              width={30}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                id="logo-image"
                src={deepdiveLogoSVG}
                alt="Deepdive logo"
                className="w-[130px] cursor-pointer md:w-[180px]"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://www.linkedin.com/company/deepdive-school"}
            >
              <Image
                src={linkedInLogo}
                alt="Deepdive logo"
                width={30}
                className="cursor-pointer"
              />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://www.instagram.com/deepdive-school"}
            >
              <Image
                src={instagramLogo}
                alt="Deepdive logo"
                width={30}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <ul className="mt-6 flex flex-col space-y-2">
          <li>
            <Link
              className="font-sans text-sm font-normal transition-all hover:opacity-80"
              href={"/becomeateacher"}
            >
              {t("beATeacher")}
            </Link>
          </li>
          <li>
            <Link
              className="font-sans text-sm font-normal transition-all hover:opacity-80"
              href={"/refund"}
            >
              {t("refund")}
            </Link>
          </li>
          <li>
            <Link
              className="font-sans text-sm font-normal transition-all hover:opacity-80"
              href={"/becomeateacher"}
            >
              {t("benefits")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
