# Everyday Carry — Jon Morales

This small 11ty site showcases three items I don't leave home without. It uses a custom 11ty layout, a reusable shortcode, and a fresh theme stylesheet.

What I added:
- A new layout: `_includes/layout.liquid` (updated) used site-wide.
- A shortcode `edd_card` registered in `.eleventy.js` to render item cards.
- Item pages: `/items/phone/`, `/items/wallet/`, `/items/keys/`.
- New theme stylesheet: `styles/theme.css` (new color palette and >10 rulesets).
- Placeholder images in `images/` (SVG). Replace these with your phone photos to meet personal-photo requirements.

How to preview locally (if you have 11ty installed):

```bash
# install dev deps and run 11ty (optional: use npx)
npm install
npx @11ty/eleventy --serve
```

Replace images / current state:
- I updated the site to use the JPEG photos you uploaded: `images/Phone.jpeg`, `images/Wallet.jpeg`, and `images/CarKeys.jpeg`.
- If you want to swap in different photos, add them to the `images/` folder and update the `src` in the corresponding item page (`items/phone/index.liquid`, `items/wallet/index.liquid`, `items/keys/index.liquid`).
# 11ty Boilerplate

Super basic [11ty](https://www.11ty.dev) starter to get you moving in the right direction and gently introduce some core features like **Passthrough File Copy** for handling images and stylesheets, **layouts**, and templating with [Liquid](https://shopify.github.io/liquid/) and [Markdown](https://www.markdownguide.org).

## Quickstart

1. Create a new repository in your own account from this template.
2. Open the new repository in Codespaces or your own development environment.
3. Make sure you have Node.js installed (this will be automatic if using Codespaces).
4. In your terminal type `npx @11ty/eleventy --serve` to build and view the template.
