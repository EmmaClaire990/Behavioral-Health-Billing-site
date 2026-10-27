# BehavioralHealthMedicalBilling.com

Marketing site for a behavioral health medical billing and revenue cycle management company. Built with Next.js 15 (App Router), React 19, and TypeScript. It's frontend only: there's no backend yet.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Where things live

| Path | What it is |
| --- | --- |
| `lib/site.ts` | **All editable content**: phone, email, nav, services, provider types, process steps, FAQs, articles |
| `lib/forms.ts` | `submitForm()`, a stub used by every form. Replace its body with a real API call when the backend is ready |
| `app/globals.css` | Design tokens (colors at the top) and all styles |
| `app/` | Pages: `/`, `/services`, `/services/[slug]`, `/who-we-serve`, `/about`, `/resources`, `/resources/[slug]`, `/contact` |
| `components/` | Shared UI (top bar, nav, footer, page hero, forms, FAQ, scroll-reveal) |
| `public/images/` | Photography (Unsplash, free to use under the Unsplash License) |

## Before launch

- Phone and email are set in `lib/site.ts`. Make sure the email inbox exists.
- Connect `submitForm()` in `lib/forms.ts` to a real endpoint (consultation, quick consultation, newsletter).
- Add testimonials or performance metrics only once they're verified.
