"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Jananikaavya", label: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/janani-kaavya-b8170b285/", label: "LinkedIn" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/its_me_janu_here_/", label: "Instagram" },
  { icon: <FaTelegram />, path: "https://web.telegram.org/k/", label: "Telegram" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <div className="flex gap-4">
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Social;
