# pbtkhoa-github

Personal portfolio of Phạm Bá Tuấn Khoa. Nuxt 4, static output, deployed to GitHub Pages.

```bash
npm install
npm run dev
npm run generate
```

Content lives in `app/data/site.ts`. Planning notes are in `planning/`, the confirmed mockup in `design/mockup/`.

The contact form has no backend: it checks the fields, then opens the visitor's email app with the message filled in. The deploy workflow reads the Pages base path from `actions/configure-pages`, so the site works at `pbtkhoa.github.io/`, at `pbtkhoa.github.io/<repo>/` or on a custom domain without changes.
