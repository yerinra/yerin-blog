import Link from "next/link";
import React from "react";

export default function Nav() {
  const routes = [
    { label: "blog", pathname: "/posts" },
    { label: "portfolio", pathname: "/portfolio" },
    { label: "about", pathname: "/about" },
  ];

  return (
    <nav>
      <ul className="flex justify-between">
        {routes.map((route) => (
          <li key={route.pathname}>
            <Link href={route.pathname}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
