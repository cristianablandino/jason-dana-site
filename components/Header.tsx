"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Facebook, Instagram, Logo, Substack } from "./Icons";
import { nav, site } from "@/lib/site";

// Pages shown in the "Therapy" hover menu
const therapyLinks = [
  { label: "Specializations", href: "/specializations" },
  { label: "My approach", href: "/my-approach" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const therapyActive = therapyLinks.some((l) => pathname.startsWith(l.href));

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
              // The Specializations link is replaced by the Therapy hover menu
              if (item.href === "/specializations") {
                return (
                  <li key="therapy" className="nav-dropdown">
                    <span className={`nav-dropdown-label${therapyActive ? " active" : ""}`} tabIndex={0}>
                      Therapy
                    </span>
                    <ul className="nav-dropdown-menu">
                      {therapyLinks.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                            onClick={() => setOpen(false)}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
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
