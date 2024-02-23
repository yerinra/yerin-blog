"use client";
import { links } from "@/lib/data";
import { useActiveSectionStore } from "@/lib/hooks/useActivePath";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const { activeLink, setActiveLink } = useActiveSectionStore();

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
