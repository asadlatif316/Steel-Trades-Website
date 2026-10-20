# Arsal Steel Traders Website

A business website for **Arsal Steel Traders**, an iron and steel supplier in
Sialkot, Pakistan. It helps customers learn about the business, see what is
supplied, and ask for a quote by call, WhatsApp or the quote form.

The page structure follows the reference site (ashrafsteel.com has Home, About Us
and Contact Us). The design, text and photos are original. Nothing is copied
from the reference site.

---

## 1. Project status

| Page / part  | Status                                                            |
|--------------|-------------------------------------------------------------------|
| Header       | Done                                                              |
| Footer       | Done                                                              |
| Home page    | Done (all 8 sections, see section 5)                              |
| About Us     | In progress: page banner built, other sections not built yet     |
| Contact Us   | Not built                                                         |

The site is built **one section at a time**. A section is only built when the
owner clearly says "build". Update this table after each step.

---

## 2. Tech stack

| Tool              | Why it is used                                              |
|-------------------|-------------------------------------------------------------|
| Next.js (App Router) | Routing, server rendering, fast pages                    |
| JavaScript        | Not TypeScript. Keeps the code simple                       |
| Tailwind CSS v4   | Styling. Design tokens live in `app/globals.css`            |
| shadcn/ui         | Ready-made components (Button, Card, Badge, Carousel, ...)  |
| lucide-react      | Icons                                                       |

- Path alias: `@/` means the project root. Example: `@/lib/site`.
- Cache Components is **on** in Next.js. Because of this, avoid `new Date()` in
  server components. The footer year is typed by hand.

---

## 3. Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Add a shadcn component when you need one:

```bash
npx shadcn@latest add button
```

Fonts come from Google Fonts through `next/font`. They need an internet
connection the first time. They were not tested in the earlier workspace, so
check them on your own computer.

---

## 4. Folder structure

```
app/
  layout.js                  Root layout: fonts, Header, Footer
  globals.css                Tailwind setup and all design tokens
  page.js                    Home page
  about/page.js              About Us page
  contact/page.js            Contact Us page (still blank)
  components/
    Header.js                Top bar, logo, menu, buttons, mobile menu
components/
  ui/                        shadcn/ui components (generated, do not hand edit)
  layout/
    Footer.js                Site footer
    footer-data.js           Footer links and text
  sections/
    Hero.js                  Home sections ...
    QuickFacts.js
    Supply.js
    WhyChooseUs.js
    Process.js
    NumberedList.js
    FAQ.js
    CallToAction.js
    SectionHeading.js        Shared heading used by many sections
    Reveal.js                Fade-in-on-scroll wrapper
    home-data.js             All Home page text and lists
    AboutBanner.js           About page banner
    about-data.js            All About page text
lib/
  site.js                    Business details used across the site
public/                      Images, logo, favicon
```

Note: `Header.js` currently sits in `app/components/`. You may move it to
`components/layout/` later so layout parts live together.

---

## 5. How the code is organised

Three simple rules:

1. **One component per section.** Each section is its own file. You can change
   one section without touching the others. Real-life idea: each section is a
   Lego brick. The page is the brick wall.
2. **Content lives in a data file.** Text, lists and image paths are in files
   like `home-data.js` and `about-data.js`. To change a heading, edit the data
   file. The component does not change.
3. **Pages only arrange sections.** A file like `app/page.js` just lists the
   sections in order, like a table of contents.

### Home page sections, in order

| # | Section          | File                  | What it does                                   |
|---|------------------|-----------------------|------------------------------------------------|
| 1 | Hero             | `Hero.js`             | Centered text on a photo with a dark layer, large heading, two buttons |
| 2 | Quick facts      | `QuickFacts.js`       | Short key facts about the business             |
| 3 | What we supply   | `Supply.js`           | Product carousel with a hover animation        |
| 4 | Why choose us    | `WhyChooseUs.js`      | Four reasons to choose the business            |
| 5 | How to order     | `Process.js`          | The ordering steps                             |
| 6 | FAQ              | `FAQ.js`              | Common questions and answers                   |
| 7 | Call to action   | `CallToAction.js`     | Rounded card pushing the visitor to get a quote |
| 8 | Footer           | `Footer.js`           | Links, contact details, copyright              |

The Header sits above everything and the Footer below. Both are placed in
`layout.js`, so they show on every page.

### Shared helpers

- `SectionHeading.js`: a small label, a heading and an optional sentence.
- `Reveal.js`: wraps content so it fades in when scrolled into view.
- `NumberedList.js`: numbered cards. It is reused for "What we stand for".
- `Process.js`: step list. It is reused for "How we work" on the About page.

### Header (`app/components/Header.js`)
A client component. It has a contact bar, the logo, the menu, a **Get Quote**
button, a **WhatsApp** button and a mobile menu.

---

## 6. Design system

All tokens are in `app/globals.css` under `@theme inline`.

### Colors

| Token        | Hex       | Used for                              |
|--------------|-----------|---------------------------------------|
| quench       | #071a2e   | Darkest background (banners, CTA)     |
| navy         | #0e2a47   | Dark sections                         |
| navy-soft    | #16385c   | Cards on dark sections                |
| paper        | #f3f5f7   | Light page background                 |
| plate        | #dde3e9   | Alternate light background            |
| ink-muted    | #526070   | Body text on light backgrounds        |
| brass        | #c29a3f   | Accent: buttons, lines, small labels  |
| brass-deep   | #8f6d1f   | Accent text on light backgrounds      |

shadcn variables are matched to the same palette:
`--primary` is brass, `--primary-foreground` is quench, `--ring` is brass, and
`--radius` is 0.25rem (slightly square corners, like cut steel plate).

Real-life idea: steel is dark and cold, brass is a warm metal. Dark navy with
brass details looks like a steel yard with a brass nameplate: strong, serious
and trustworthy.

### Fonts (`app/layout.js`)
- **Archivo Narrow** for headings. Use the class `font-display`.
- **IBM Plex Sans** for body text.

### Layout habits
- Section wrapper: `py-16 md:py-24` for the vertical space.
- Content width: `mx-auto max-w-6xl px-4`.
- Sections alternate light (paper, plate) and dark (navy, quench) backgrounds so
  the eye can rest and each section is easy to tell apart.

---

## 7. Business details (`lib/site.js`)

This file holds the details used by the Header, Footer, Contact page and the
"Visit us" section: name, city, address, phone, WhatsApp digits, email and hours.

Change a detail here and it updates everywhere. Never type contact details
directly inside a component.

The business email and mobile number are known. One number is used for both
phone and WhatsApp. **Business hours and the full address still need to be
confirmed** with the owner.

---

## 8. Rules for the content

1. **Do not invent facts.** No made-up numbers, founding year, customer
   reviews, certificates or promises. If the owner has not confirmed it, mark
   it as a draft in the data file with a `CONFIRM:` comment.
2. **No private tax details.** Never put anything from the owner's registration
   document on the site.
3. **English only.**
4. **Business-style colors and fonts only.** Use the tokens above.
5. **Do not copy the reference site.** Structure only.
6. **One `<h1>` per page.** It lives in the page banner or the hero. Other
   sections use `<h2>`.

---

## 9. How to work on this project

1. Discuss first. Build only when "build" is said clearly.
2. Build **one section at a time**, then stop and wait for the next instruction.
3. Give the code in the chat and name the file for each block.
4. Create one component per section and keep its text in a data file.
5. Use shadcn/ui components wherever one fits.
6. Use simple English.

### How to add a new section

1. Add the text as a new object in the page's data file.
2. Create `components/sections/<SectionName>.js`. It imports its data and
   returns a `<section>`.
3. Import it in the page file and place it in order.
4. Update the status table in this README.

Use this wrapper so spacing stays consistent:

```jsx
<section className="bg-paper py-16 md:py-24">
  <div className="mx-auto max-w-6xl px-4">
    {/* content */}
  </div>
</section>
```

### How to add an image

Put the file in `public/images/` and set its path in the data file, for example
`"/images/yard.jpg"`. Until an image value is set, sections show a navy panel
with an icon. Home sections use `whyUsImage`, `processImage` and the product
image fields in `home-data.js`.

---

## 10. Planned work

### About Us (page banner is done)
2. **Our story:** text on one side, a photo with a brass offset frame on the other
3. **What we stand for:** four numbered values (reuse `NumberedList`)
4. **Who we serve:** customer types with icons
5. **How we work:** steps from enquiry to delivery (reuse `Process`)
6. **Visit us:** address, phone, email, hours (reuse `QuickFacts`)
7. **Call to action:** rounded card (reuse `CallToAction`)

### Contact Us
- Quote request form
- Contact details and hours
- Map

### Optional extras
- Industries we serve
- Yard photo carousel
- Meet the owner

---

## 11. Open items (need the owner)

- Business hours and the full address.
- The logo file.
- Real photos: hero, products, why us, process, call to action, and the yard.
- Confirmation of the product list, the four "why choose us" points, the ordering
  steps and the FAQ answers.
- The year the business started and its story, for the About page.
- Which customer types the business really serves.

---

## 12. Checks before launch

- [ ] Every `CONFIRM:` comment in the data files is resolved.
- [ ] All placeholders are replaced with real details (hours, address, logo).
- [ ] Real photos are added and have useful `alt` text.
- [ ] Fonts load correctly on a real computer.
- [ ] Looks correct on a phone (about 375 px), a tablet and a desktop.
- [ ] Every link and button works, including WhatsApp and phone links.
- [ ] Only one `<h1>` per page.
- [ ] Page titles and descriptions are set with `metadata` on every page.
- [ ] No private tax details anywhere.
- [ ] No invented numbers or claims.
- [ ] `npm run build` finishes without errors.
