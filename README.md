# pbtkhoa-github

Personal portfolio of Phạm Bá Tuấn Khoa. Nuxt 4, static output, deployed to GitHub Pages.

```bash
npm install
npm run dev
npm run generate
```

Content lives in `app/data/site.ts`. Planning notes are in `planning/`, the confirmed mockup in `design/mockup/`.

The contact form posts to `NUXT_PUBLIC_FORM_ENDPOINT` when it is set at build time (the deploy workflow reads the `FORM_ENDPOINT` Actions variable). Without it, the form opens the visitor's email app with the message filled in.
