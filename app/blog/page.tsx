import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return (
    <section className="wrap section">
      <h1 className="serif">Blog</h1>
      <div className="card-grid three">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
            <img src={images.card} alt="" />
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <span className="read-more">Read more</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
