"use client";

import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { LinkType } from "@/types";
import { ThemeToggle } from "../ThemeToggle";
import { useRouter } from "next/router";

type Props = {
  className?: string;
  myLinks: LinkType[];
};

const NavbarShad = ({ className, myLinks }: Props) => {
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, href, children, ...props }, ref) => {
    return (
      <li>
        <Link
          href={href ?? ""}
          legacyBehavior
          passHref
          className=" text-lg flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          {...props}
        >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
          </NavigationMenuLink>
        </Link>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  (myLinks[1].link ?? []).map((link: LinkType) => {
    //console.log(link);
  });

  const RenderNav: React.FC = () => {
    return (

      <>
        {myLinks.map((link, index) => {
          if (link.link) {
            return (
              <NavigationMenuItem   key={link.name} >
                <NavigationMenuTrigger  className="">{link.name}</NavigationMenuTrigger>
                <NavigationMenuContent className="fixed overflow-y-auto">
                  <ul
                    className={
                      "flex flex-col gap-3 p-4 lg:w-[300px] 2xl:w-[400px]"
                    }
                  >
                    {(link.link ?? []).map((subLink: LinkType, index) => (
                      <ListItem key={subLink.href} href={subLink.href} className="text-lg ">
                        {subLink.name}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href ?? ""} legacyBehavior passHref className="text-lg">
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} `}>
                    {link.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </>
    );
  };
  

  return (
    <>
      <span className="flex-1 flex-row gap-4 hidden sm:flex">
        <NavigationMenu className="">
          <NavigationMenuList className={className}>
            <RenderNav />
          </NavigationMenuList>
        </NavigationMenu>

        <ThemeToggle />
      </span>
    </>
  );
};

export default NavbarShad;
