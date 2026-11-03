// Placeholder posts. Replace with your own writing.
export type Post = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "am-i-fully-healed-yet",
    title: "Am I Fully Healed Yet?",
    summary: "Some thoughts on the goal of therapy.",
    body: [
      "Many people, myself included, initially come to therapy with what is called a “medical model” of what therapy is all about. The basic premise is something like this:",
      <i>"If you are suffering from your thoughts, feelings, or behaviors then you have a medical condition and you need to see a doctor who will fix that medical condition and then you will be fully healthy again."</i>
      "Seems simple enough, and it aligns with our vision for how physiological health works too. There are strengths to this view of psychotherapy and ways that it can be a useful way to think about the therapeutic process, however, there are also some serious shortcomings and unintended negative consequences."
      "One of these unintended negative consequences is a common implicit assumption about therapy, that we stay in therapy until we are “fully healed”. Another way of describing this attitude is that the goal of therapy is to become totally mentally sterile, with no traces of any problematic or confused thoughts, feelings or behaviors left in us after we have successfully identified all of these and freed ourselves from them."
      "The problem with that is, that isn’t really a reachable goal. Not just because it wouldn’t be physically possible, but also because there is always social and cultural disagreement about what is the right way to think and act. So, operating with this assumption in therapy can lead to unnecessary stress and self-consciousness as well as probably spending more time in therapy than we actually need."
      "An alternative assumption that is found in psychotherapy schools such as Acceptance and Commitment Therapy and Person-Centered Therapy is that the goal of therapy can be developing your internal skills to live an increasingly meaningful and satisfying life. This goal, it turns out, is also in some ways unachievable. There is no fixed endpoint of a maximally meaningful and satisfying life. However, changing the scale from “how minutely small traces of mental illness can I fix” to “how much meaning can I derive from my life” turns the endless journey in the opposite direction and becomes measured in how satisfied you feel living your life."
      "This is freeing and empowering as a client where you end up being the one in the driver’s seat of your therapeutic treatment. This perspective also re-contextualizes “mental illness” as anything that is limiting your ability to live your life in line with what you most deeply value."
      "Making this internal switch is often difficult for clients, as the traditional medical model approach is deeply ingrained. However, in my experience, as in the experience of many other therapists, when clients are able to see their therapy as primarily a vehicle to help them live their best life they unlock the motivation needed for their growth in therapy to really take off. And, when they reach a point that they are ready to continue their work on their own without the therapist, they are empowered with the view that they have everything they need to continue growing and developing what they need to live an increasingly satisfying life."
      "Now once again, there is still value in the medical model approach. Psychotherapy has benefited by being able to be integrated into the medical field and the vision of a skilled practitioner healing a deep wound inside of a client is a powerful and helpful way to view the therapeutic process. However, it is still important to remember the quote from Sir William Osler, “A good doctor treats the disease; the great physician treats the patient who has the disease.” Keeping what the client most deeply cares about at the center of any treatment is essential to the most empowering and helpful work being done."
      "At the end of the day, what really matters in your therapy is what matters to you."
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
