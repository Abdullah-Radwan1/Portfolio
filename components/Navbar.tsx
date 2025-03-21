"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/types";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import the Button component from shadcn
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // Import Sheet components from shadcn
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` z-10 transition-colors duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="flex  lg:py-4 flex-wrap items-center justify-evenly mx-auto px-4 py-2">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl md:text-3xl font-bold transition-colors duration-300"
        >
          Abdullah
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-4">
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index}>
              <Button
                variant="ghost"
                className="transition-colors duration-300"
              >
                {link.title}
              </Button>
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetContent side="right" className="w-[200px] sm:w-[250px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link, index) => (
                  <Link
                    href={link.path}
                    key={index}
                    onClick={() => setNavbarOpen(false)}
                    className="px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ModeToggle />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
