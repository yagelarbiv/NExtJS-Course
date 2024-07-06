"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import "./style.css";

const NavLinks = [
  { name: "Login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "forgot-password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [ input, setInput ] = useState('');
  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {
        NavLinks.map(({ name, href }) => {
          const isActive = pathName.startsWith(href);
          return (
            <Link
              href={href}
              key={name}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {name}
            </Link>
          );
        })
      }
      {children}
    </div>
  );
}
