import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "components/Button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "components/Sheet";

const URL_IMG_LOGO =
  "https://s3-us-west-1.amazonaws.com/gregkalamdaryanbucket2/website_files/Logo.png";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Demo Reel",
    href: "/demo-reel",
  },
  {
    label: "Other Works",
    href: "/other-works",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const Header = () => {
  return (
    <div className="flex items-center justify-between sm:px-8 py-4 border-b-4 bg-background">
      <div className="flex gap-4">
        <img src={URL_IMG_LOGO} alt="logo" className="w-[100px] h-[56px]" />
        <div className="flex flex-col gap-1 text-foreground">
          <div className="text-lg">Gregory Kalamdaryan</div>
          <div>VFX Artist</div>
        </div>
      </div>

      <div className="sm:flex md:hidden mr-4">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="text-foreground cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="dark">
            <div className="gap-4 flex flex-col">
              {routes.map((route, index) => {
                return (
                  <Link
                    key={index}
                    to={route.href}
                    className="text-foreground hover:text-foreground/80"
                  >
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="gap-4 hidden md:flex">
        {routes.map((route, index) => {
          return (
            <Link
              key={index}
              to={route.href}
              className="text-foreground hover:text-foreground/80"
            >
              {route.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
