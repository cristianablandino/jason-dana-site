# Jason Dana LCSW website

Next.js (App Router) site. Pages: Home, Specializations, Getting Started, My Approach, About, Contact, Blog (+ articles).

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. At vercel.com choose Add New > Project, import the repo, and click Deploy (no settings needed).
   Or from the terminal: `npx vercel`, then `npx vercel --prod`.

## Things to edit
- `lib/site.ts`: email, phone, social links, nav, footer links
- `lib/images.ts` + `public/images/`: swap placeholder photos for your own
- `lib/posts.ts`: blog posts
- Page copy lives in each `app/*/page.tsx`

## Contact form email (optional)
The form posts to `app/api/contact/route.ts`. Without setup it just logs to Vercel's function logs.
To receive emails, create a free Resend account and add these in Vercel > Settings > Environment Variables:
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (see `.env.example`), then redeploy.
Note: don't collect clinical details through this form; it is not a HIPAA-compliant channel.
