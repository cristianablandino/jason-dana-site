import Link from "next/link";
import { images } from "@/lib/images";

type Props = {
  title: string;
  text: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function PageHero({
  title,
  text,
  primary = { label: "Schedule free consultation", href: "/getting-started#contact" },
  secondary = { label: "My approach", href: "/my-approach" }, 
  image = images.office,
}: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="page-hero-copy">
          <h1 className="serif">{title}</h1>
          <p>{text}</p>
          <div className="btn-row">
            <Link href={primary.href} className="btn btn-primary">{primary.label}</Link>
            <Link href={secondary.href} className="btn btn-secondary">{secondary.label}</Link>
          </div>
        </div>
        <img className="page-hero-photo" src={images.office} alt="A calm therapy office with two armchairs and plants" />
      </div>
    </section>
  );
}
