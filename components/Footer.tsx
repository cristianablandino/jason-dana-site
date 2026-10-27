import Link from "next/link";
import { Facebook, Instagram, Logo, Substack } from "./Icons";
import { footerColumns, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <Logo className="brand-mark" />
            <span>{site.name}</span>
          </Link>
          <div className="social clay">
            {site.facebook && (
  <a href={site.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook /></a>
)}
            <a href={site.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href={site.substack} aria-label="Substack" target="_blank" rel="noopener noreferrer"><Substack /></a>
            <a href={site.zocdoc} aria-label="Zocdoc" target="_blank" rel="noopener noreferrer"><img src="/images/zee.png" alt="" className="social-img" /></a>
          </div>
        </div>
        <div className="footer-cols">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="footer-inner copyright">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
