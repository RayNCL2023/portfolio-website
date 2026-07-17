# Your Portfolio Site

A single-page portfolio built with Next.js, TypeScript, and Tailwind CSS.
Dark neutral base, amber accent, Space Grotesk / Inter / IBM Plex Mono type.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site hot-reloads as you edit.

## 2. Add your content (the only file you need to touch)

Open **`data/site.config.ts`**. Everything on the page — your name, role,
bio, skills, projects, email, and social links — is pulled from this one
file. Edit the values, save, and the whole site updates.

## 3. Add your photo

Drop a photo into the `public` folder and name it exactly **`profile.jpg`**.
The hero section looks for that file automatically; until it's there, a
placeholder frame is shown instead. Landscape or portrait both work — the
photo is cropped to a portrait frame — but a well-lit headshot with a plain
or blurred background works best.

## 4. Make the contact form actually send email

The form uses [Web3Forms](https://web3forms.com) — a free service that
forwards form submissions to your inbox with no backend server needed.

1. Go to https://web3forms.com and enter your email to get a free access key
   (no account needed).
2. Paste that key into `web3formsAccessKey` in `data/site.config.ts`.
3. Test the form locally or after deploying — you should get an email
   within a few seconds of submitting.

Free tier covers 250 submissions/month, which is far more than a portfolio
site needs.

## 5. Add your resume (optional)

Drop a PDF into `public/resume.pdf` — the "Resume" link in the nav bar
already points to it.

## 6. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
gh repo create your-username/portfolio --public --source=. --push
```

(No `gh` CLI? Create an empty repo on github.com, then:)

```bash
git remote add origin https://github.com/your-username/portfolio.git
git branch -M main
git push -u origin main
```

## 7. Deploy on Vercel

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click **Add New → Project**, then select your `portfolio` repo.
3. Vercel auto-detects Next.js — leave all settings as default.
4. Click **Deploy**. You'll get a live URL like `portfolio-yourname.vercel.app`
   within about a minute.
5. Every future `git push` to `main` automatically redeploys the live site.

Optional: in your Vercel project's **Settings → Domains**, you can attach a
custom domain if you buy one later.

## Project structure

```
app/
  layout.tsx      → fonts, page metadata
  page.tsx         → assembles the sections below
  globals.css      → color/type/motion design tokens
components/
  Nav, Hero, About, Projects, Contact, Footer, ProfilePhoto, Reveal
data/
  site.config.ts   → ← all your editable content lives here
public/
  profile.jpg      → your photo (add this)
  resume.pdf       → your resume (add this, optional)
```
