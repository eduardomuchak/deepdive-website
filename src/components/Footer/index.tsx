"use client";

import deepdiveLogoSVG from "@/assets/brand/deepdive-logo-white.svg";
import instagramLogo from "@/assets/icons/instagram.svg";
import linkedInLogo from "@/assets/icons/linkedin.svg";
import { useWindowSize } from "@react-hookz/web";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const { width } = useWindowSize();
  const isMobile = width < 834;

  return (
    <footer className="mx-auto w-full px-6 py-5 lg:px-24 lg:pb-0">
      {!isMobile ? (
        <div className="mx-auto grid min-h-[120px] w-full grid-flow-row grid-cols-1 sm:grid-cols-4">
          <div className="flex items-center justify-center">
            <Link href={"/"}>
              <Image
                id="logo-image"
                src={deepdiveLogoSVG}
                alt="Deepdive logo"
                width={width > 640 ? 180 : 130}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex justify-center">
            <ul className="mt-9 flex flex-row flex-wrap gap-2 lg:gap-5">
              <li>
                <Link
                  className="font-sans text-sm font-normal transition-all hover:opacity-80"
                  href={"/beateacher"}
                >
                  Seja professor da Deepdive
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul className="mt-9 flex flex-col space-y-2">
              <li>
                <Link
                  className="font-sans text-sm font-normal transition-all hover:opacity-80"
                  href={"/beateacher"}
                >
                  Reembolso pela empresa
                </Link>
              </li>
              <li>
                <Link
                  className="font-sans text-sm font-normal transition-all hover:opacity-80"
                  href={"/beateacher"}
                >
                  Benefícios para grupos empresariais
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
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <div>
              <Link href={"/"}>
                <Image
                  id="logo-image"
                  src={deepdiveLogoSVG}
                  alt="Deepdive logo"
                  width={width > 640 ? 180 : 130}
                  className="cursor-pointer"
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
                href={"/beateacher"}
              >
                Seja professor da Deepdive
              </Link>
            </li>
            <li>
              <Link
                className="font-sans text-sm font-normal transition-all hover:opacity-80"
                href={"/beateacher"}
              >
                Reembolso pela empresa
              </Link>
            </li>
            <li>
              <Link
                className="font-sans text-sm font-normal transition-all hover:opacity-80"
                href={"/beateacher"}
              >
                Benefícios para grupos empresariais
              </Link>
            </li>
          </ul>
        </div>
      )}
    </footer>
  );
}

export default Footer;
