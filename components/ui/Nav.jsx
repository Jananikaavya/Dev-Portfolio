"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "offerings",
    path: "/offerings",
  },
  {
    name: "profile",
    path: "/profile",
  },
  {
    name: "showcase",
    path: "/showcase",
  },
  {
    name: "connect",
    path: "/connect",
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent-hover border-b-2 border-accent-hover"} capitalize font-medium hover:text-accent-hover transition-all `}>{link.name}</Link>
      })}
    </nav>
  )
}

export default Nav