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

## Proof sections (metrics, case studies, systems, payers, testimonials, team)

All proof content lives in `lib/proof.ts`. Add **genuine, documented** data only. Each section stays hidden while its list is empty. Testimonials and the leadership team are empty for now, so they don't show. The homepage "Trusted Revenue Cycle Partner" metrics band replaces the generic focus banner whenever `metrics` has entries.

## Before launch

- Phone and email are set in `lib/site.ts`. Make sure the email inbox exists.
- Connect `submitForm()` in `lib/forms.ts` to a real endpoint (consultation, quick consultation, newsletter).
- Add testimonials or performance metrics only once they're verified.
