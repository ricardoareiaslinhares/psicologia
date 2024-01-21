"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavbarShad from "./NavbarShad";
import { LinkType } from "@/types";
import { NavigationMenuTrigger } from "../ui/navigation-menu";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "../ThemeToggle";
import { useTheme } from "next-themes";

type Props = {
  myLinks: LinkType[];
};

export function Drawer({ myLinks }: Props) {
  const [showDropDown, setShowDropDown] = useState<number | null>();

  const { theme, setTheme } = useTheme();

  useEffect(() => {}, [showDropDown]);

  const RenderNav = (): JSX.Element => {
    const handleDropdownClick = (index: number) => {
      console.log(index);
      setShowDropDown((prev) => (prev === index ? null : index));
    };
    return (
      <>
        {myLinks.map((link, indexLink) => {
          if (link.link) {
            return (
              <div key={indexLink}>
                <span className="flex flex-row items-center">
                  <Button
                    onClick={() => handleDropdownClick(indexLink)}
                    variant={"ghost"}
                  >
                    {link.name}
                    <ChevronDownIcon
                      className={`relative top-[1px] ml-2 h-3 w-3  ${
                        showDropDown === indexLink ? "rotate-180 " : ""
                      } `}
                      aria-hidden="true"
                    />
                  </Button>
                </span>

                <span
                  className={`${
                    showDropDown === indexLink ? "flex  " : " hidden"
                  } flex-col items-start pl-4 mt-3 gap-3 animate-in fade-in  duration-300 slide-in-from-left-20`}
                >
                  {link.link.map((subLink, indexSubLink) => {
                    return (
                      <span className="">
                        <Button key={indexSubLink} variant={"ghost"}>
                          <Link href={subLink.href ?? ""} className="italic">
                            {subLink.name}
                          </Link>
                        </Button>
                      </span>
                    );
                  })}
                </span>
              </div>
            );
          } else {
            return (
              <Button variant={"ghost"}>
                <Link href={link.href ?? ""}>{link.name}</Link>
              </Button>
            );
          }
        })}
      </>
    );
  };

  return (
    <Sheet onOpenChange={() => setShowDropDown(null)}>
      <SheetTrigger asChild>
        <Button className="block sm:hidden" variant="ghost">
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent
        className={`${
          theme === "dark"
            ? "bg-background/80 backdrop-blur-sm"
            : "bg-background"
        }`}
      >
        <SheetHeader>
          <SheetTitle>Ricardo Linhares Consultas de Psicologia </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col mt-8  gap-6 p-4 items-start h-4/6 ">
          <RenderNav />
        </nav>
        <span className="flex flex-1 flex-row justify-center items-center">
          <ThemeToggle />
        </span>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
