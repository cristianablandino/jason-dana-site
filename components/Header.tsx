"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Logo, Substack } from "./Icons";
import { nav, site } from "@/lib/site";

// Pages shown inside the "Therapy" dropdown
const therapyLinks = [
  { label: "Specializations", href: "/specializations" },
  { label: "My approach", href: "/my-approach" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [therapyOpen, setTherapyOpen] = useState(false);
  const therapyRef = useRef<HTMLLIElement>(null);

  const therapyActive = therapyLinks.some((l) => pathname.startsWith(l.href));

  // Close the dropdown when the page changes
  useEffect(() => {
    setTherapyOpen(false);
  }, [pathname]);

  // Close the dropdown when clicking outside it or pressing Escape
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (therapyRef.current && !therapyRef.current.contains(e.target as Node)) {
        setTherapyOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setTherapyOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function closeAll() {
    setOpen(false);
    setTherapyOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={closeAll}>
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
              // The Specializations link is replaced by the Therapy dropdown
              if (item.href === "/specializations") {
                return (
                  <li key="therapy" ref={therapyRef} className={`nav-dropdown${therapyOpen ? " open" : ""}`}>
                    <button
                      type="button"
                      className={`nav-dropdown-btn${therapyActive ? " active" : ""}`}
                      aria-expanded={therapyOpen}
                      aria-haspopup="true"
                      onClick={() => setTherapyOpen((v) => !v)}
                    >
                      Therapy
                    </button>
                    <ul className="nav-dropdown-menu">
                      {therapyLinks.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            aria-current={pathname.startsWith(l.href) ? "page" : undefined}
                            onClick={closeAll}
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
                  <Link href={item.href} aria-current={active ? "page" : undefined} onClick={closeAll}>
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
