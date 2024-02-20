import React from "react";
import Nav from "./nav";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>
        <Link href="/">yerin-blog</Link>
      </h1>
      <Nav />
    </div>
  );
}
