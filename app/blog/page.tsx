import type { Metadata } from "next";
import Link from "next/link";
import { posts, author, formatDate } from "@/lib/posts";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return (
    <section className="wrap section">
      <h1 className="serif">Blog</h1>
      <div className="card-grid three">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
            <img src={p.image ?? images.card} alt="" style={{ objectPosition: p.imagePosition }} />
            <h3>{p.title}</h3>
            <span className="post-meta">{`By ${author}${p.date ? " · " + formatDate(p.date) : ""}`}</span>
            <p>{p.summary}</p>
            <span className="read-more">Read more</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
