import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { images } from "@/lib/images";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function Post({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="article-hero">
        <img src={post.image ?? images.articleHero} alt="" />
        <div>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </div>
      </section>

      <article className="article-body">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
                  {post.credit && (
            <p className="photo-credit">
              Photo by{" "}
              <a href={post.credit.authorUrl} target="_blank" rel="noopener noreferrer">
                {post.credit.author}
              </a>{" "}
              on{" "}
              <a href={post.credit.sourceUrl} target="_blank" rel="noopener noreferrer">
                {post.credit.source}
              </a>
            </p>
          )}
      </article>

      {related.length > 0 && (
        <section className="wrap section">
          <h2>Related articles</h2>
          <div className="card-grid three">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
               <img src={p.image ?? images.card} alt="" />
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
