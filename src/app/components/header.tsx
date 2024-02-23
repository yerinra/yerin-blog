import React from "react";
import Nav from "./nav";
import Link from "next/link";
import ThemeToggleButton from "./theme-toggle-button";

export default function Header() {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between">
        {/* <h1>
          <Link href="/">yerin-blog</Link>
        </h1> */}
        <ThemeToggleButton />
      </div>
      <Nav />
    </section>
  );
}
