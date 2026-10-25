"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Facebook, Instagram, Logo, Substack } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Logo className="brand-mark" />
          <span>{site.name}</span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? " open" : ""}`} aria-label="Primary">
          <ul>
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="social">
            {site.facebook && (
  <a href={site.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook /></a>
)}
            <a href={site.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href={site.substack} aria-label="Substack" target="_blank" rel="noopener noreferrer"><Substack /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
