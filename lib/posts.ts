// Placeholder posts. Replace with your own writing.
export type Post = {
  slug: string;
  title: string;
  summary: string;
  image?: string;
    credit?: {
    author: string;
    authorUrl: string;
    source: string;
    sourceUrl: string;
  };
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "am-i-fully-healed-yet",
    title: "Am I Fully Healed Yet?",
    summary: "Some thoughts on the goal of therapy.",
    image: "/images/blog1.jpg",
     credit: {
      author: "Ante Hamersmit",
      authorUrl: "https://unsplash.com/@ante_kante",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/",
    },
    body: [
      "Many people, myself included, initially come to therapy with what is called a “medical model” of what therapy is all about. The basic premise is something like this:",
      "If you are suffering from your thoughts, feelings, or behaviors then you have a medical condition and you need to see a doctor who will fix that medical condition and then you will be fully healthy again.",
      "Seems simple enough, and it aligns with our vision for how physiological health works too. There are strengths to this view of psychotherapy and ways that it can be a useful way to think about the therapeutic process, however, there are also some serious shortcomings and unintended negative consequences.",
      "One of these unintended negative consequences is a common implicit assumption about therapy, that we stay in therapy until we are “fully healed”. Another way of describing this attitude is that the goal of therapy is to become totally mentally sterile, with no traces of any problematic or confused thoughts, feelings or behaviors left in us after we have successfully identified all of these and freed ourselves from them.",
      "The problem with that is, that isn’t really a reachable goal. Not just because it wouldn’t be physically possible, but also because there is always social and cultural disagreement about what is the right way to think and act. So, operating with this assumption in therapy can lead to unnecessary stress and self-consciousness as well as probably spending more time in therapy than we actually need.",
      "An alternative assumption that is found in psychotherapy schools such as Acceptance and Commitment Therapy and Person-Centered Therapy is that the goal of therapy can be developing your internal skills to live an increasingly meaningful and satisfying life. This goal, it turns out, is also in some ways unachievable. There is no fixed endpoint of a maximally meaningful and satisfying life. However, changing the scale from “how minutely small traces of mental illness can I fix” to “how much meaning can I derive from my life” turns the endless journey in the opposite direction and becomes measured in how satisfied you feel living your life.",
      "This is freeing and empowering as a client where you end up being the one in the driver’s seat of your therapeutic treatment. This perspective also re-contextualizes “mental illness” as anything that is limiting your ability to live your life in line with what you most deeply value.",
      "Making this internal switch is often difficult for clients, as the traditional medical model approach is deeply ingrained. However, in my experience, as in the experience of many other therapists, when clients are able to see their therapy as primarily a vehicle to help them live their best life they unlock the motivation needed for their growth in therapy to really take off. And, when they reach a point that they are ready to continue their work on their own without the therapist, they are empowered with the view that they have everything they need to continue growing and developing what they need to live an increasingly satisfying life.",
      "Now once again, there is still value in the medical model approach. Psychotherapy has benefited by being able to be integrated into the medical field and the vision of a skilled practitioner healing a deep wound inside of a client is a powerful and helpful way to view the therapeutic process. However, it is still important to remember the quote from Sir William Osler, “A good doctor treats the disease; the great physician treats the patient who has the disease.” Keeping what the client most deeply cares about at the center of any treatment is essential to the most empowering and helpful work being done.",
      "At the end of the day, what really matters in your therapy is what matters to you.",
    ],
  },
  {
    slug: "mental-healt-content-helpful-or-harmful",
    title: "Mental Health Content: Helpful or Harmful?",
    summary: "The importance of timing in therapeutic guidance",
    image: "/images/blog2.jpg",
      credit: {
      author: "Javier Allegue Barros",
      authorUrl: "https://unsplash.com/@soymeraki",
      source: "Unsplash",
      sourceUrl: "https://unsplash.com/",
    },
    body: [
      "I’ve benefitted a lot from self-help and therapy books, articles, TikToks, and podcasts, and I’ve also been deeply confused and misguided by these same resources. There have always been a plethora of books available on the topic of therapy and personal-growth, and since the rise of social media and the boom of interest in mental health content following the COVID pandemic there is a staggering amount of content available to us. This situation leaves us with the obvious question of how do we determine what resources to trust and which ones to ignore, but it also begs a more subtle question as well: what will be most helpful for us to hear right now?",
      "Regarding that second question, this is an aspect of mental health and personal growth content I rarely see discussed. At different points in my life I’ve devoured books, podcasts, articles, and social media posts related to my mental health journey trying to make sense of where I was at and what I needed to do to keep healing, growing, and becoming a better person. Once I had identified a source of information that seemed reliably helpful for me (a book, an author, a psychology influencer) I studiously followed their recommendations and tried to apply them in my life. Oftentimes this would work very well and even just reading or hearing the way something was described helped me feel more integrated and energized in that moment. However, other times this same book or author that I’d found so helpful would be leaving me feeling ashamed or judging myself harshly. I would be feeling like I need to better understand my own desires and follow what feels important to me and then read something extolling the virtue of generosity and warning of the dangers of selfishness. I would be feeling uncomfortable or wary of a situation and then listen to the importance of confronting fears and discomfort head on as essential to growing as a person. And in those moments my precious growing sense of clarity and trust in my own experience was swept away and replaced with a tight knot of doubt and confusion.",
      "Now as you may have gleaned from the couple examples I gave, both sides of those perspectives were actually helpful. It’s essential to connect with your desires and what you value, and it’s also a dead end road to only pursue your desires as an individual; it’s important to develop and trust your gut about situations that do not feel right, and if you only try to avoid discomfort your life will shrink. The significant piece of integrating these lessons that books, podcasts, and social media posts can’t provide is when is the right time to emphasize any of these lessons in your life.",
      "A book or post is written at a time where the topic is top of mind for the author; the time that it reaches you is a matter of chance. This leaves the odds open for you coming across content encouraging you in what appears to be the exact opposite direction to what is helpful for you right now.",
      "Now, it is still possible to work out these kinds of situations by paying close attention to the impact different ways of thinking about your situation have on your life over time, and this will slowly bring the bigger picture into greater clarity. However, the best alternative I’ve found to rapidly increase the speed and ease of this process is working with someone who knows you well and is possibly even trained in matters of personal growth and healing, like a therapist.",
      "Doing this work with someone who is familiar with the common ways individuals work on healing and growing but who can also see where you are at in your life and reflect back your specific needs and desires will help re-enforce the exact message that most helps you right now.",
      "Yes, generosity is beautiful and important, but if you’re feeling resentful and burnt out after living as a people-pleaser your whole life it’s the right thing to do to emphasize your own needs and wants! Yes, embracing discomfort as an essential part of life is necessary for living a full and meaningful life, but you do not need to expose yourself to unnecessary discomfort or tolerate a stressful situation just for the sake of feeling uncomfortable.",
      "And again, I believe it is possible to work out what message is best for you slowly over time on your own, and sometimes that’s all we’re able to afford in some periods of our life. But also, if you’re able to, working on your healing and self growth with a trusted professional can catalyze and clarify the experience in very helpful ways.",
      "Also, for what it’s worth, if you have any close relationships with family or friends who you feel know you well and want to help you grow, they can also provide clarifying feedback to help guide you on this journey as well.",
      "So, after all this, would I say metal health content is on the whole helpful or harmful? I think I’d say it is helpful. It’s just important we remember, we don’t have to do this work alone. The different messages that have helped people heal and grow can seem contradictory and confusing at times. Clarifying what is best for us right now is easiest when we have someone to help us along the way.",
    ],
  },
  {
    slug: "finding-a-therapist-who-fits",
    title: "Finding a therapist who fits",
    summary: "What to look for when choosing someone to work with.",
    image: "/images/your-photo.jpg",
    body: [
      "This is placeholder text. Replace it with your third article.",
      "Posts appear on the blog page and in the related articles section automatically.",
    ],
  },
];
