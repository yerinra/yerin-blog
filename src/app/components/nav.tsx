"use client";
import { links } from "@/lib/data";
import { useActiveSectionStore } from "@/lib/hooks/useActivePath";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const { activeLink, setActiveLink } = useActiveSectionStore();

  return (
    <nav>
      <ul className="flex justify-between ">
        {links.map((link) => (
          <li key={link.path} onClick={() => setActiveLink(link.name)}>
            <Link href={link.path}>{link.name}</Link>
            <motion.div
              // transition={{
              //   type: "spring",
              //   stiffness: 380,
              //   damping: 100,
              // }}
              className={`transition ${
                link.name == activeLink && "bg-gray-300 w-full h-[1px]"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
