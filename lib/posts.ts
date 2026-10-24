// Placeholder posts. Replace with your own writing.
export type Post = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "what-to-expect-in-your-first-session",
    title: "What to expect in your first session",
    summary: "A plain-language walkthrough of how therapy begins.",
    body: [
      "This is placeholder text. Replace it with your first article.",
      "Add as many paragraphs as you like. Each string in this list becomes one paragraph on the page.",
    ],
  },
  {
    slug: "when-anxiety-feels-like-too-much",
    title: "When anxiety feels like too much",
    summary: "How anxiety shows up, and what working on it looks like.",
    body: [
      "This is placeholder text. Replace it with your second article.",
      "To add more posts, add another object to the list in lib/posts.ts.",
    ],
  },
  {
    slug: "finding-a-therapist-who-fits",
    title: "Finding a therapist who fits",
    summary: "What to look for when choosing someone to work with.",
    body: [
      "This is placeholder text. Replace it with your third article.",
      "Posts appear on the blog page and in the related articles section automatically.",
    ],
  },
];
