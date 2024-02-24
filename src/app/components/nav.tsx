"use client";
import { links } from "@/lib/data";
import { useActiveSectionStore } from "@/lib/hooks/useActivePath";
import Link from "next/link";
import React, { useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { LinkName } from "@/lib/types";

export default function Nav() {
  const pathname = usePathname();
  const { activeLink, setActiveLink } = useActiveSectionStore();

  useEffect(() => {
    let newActiveLink;
    if (pathname.includes("posts")) newActiveLink = "Blog";
    if (pathname === "/") newActiveLink = "Home";
    if (pathname === "/portfolio") newActiveLink = "Portfolio";
    if (pathname === "/about") newActiveLink = "About";
    setActiveLink(newActiveLink as LinkName);
  }, [pathname, setActiveLink]);

  return (
    <nav>
      <ul className="flex justify-between ">
        {links.map((link) => (
          <li key={link.path} onClick={() => setActiveLink(link.name)}>
            <Button asChild variant={"link"}>
              <Link
                className={`${
                  link.name == activeLink &&
                  "text-primary underline-offset-4 underline text-acc"
                }`}
                href={link.path}
              >
                {link.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
