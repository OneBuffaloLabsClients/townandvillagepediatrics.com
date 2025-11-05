### Follow the directions when creating new site

- Update `src\utils\metadata.ts` with site data
- Update Color Scheme in `src\app\globals.css`
- Replace "replace-with-your-project-name" in package.json
- Replace "replace-with-your-site-url.com" in next-sitemap.config.js
- Generate Favicons and place them in the proper locations
- Update not-found page
- Update layout.tsx
  - Update Header & Footer Components
- update manifest.json
  - Replace "site-name"
  - Add description
- **Optional:**
  - Remove .github\workflows if not using github pages
  - Remove .github\funding.yml if private repo
  - If using analytics (GA), update `GA_MEASUREMENT_ID` in `src\lib\analytics.ts`

---

## Town and Village Pediatrics

## 1. Install dependencies

```bash
npm install
```

## 2. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Build for production

```bash
npm run build
```

## 4. Run linter

```bash
npm run lint
```
