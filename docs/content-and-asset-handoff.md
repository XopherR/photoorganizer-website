# SnapAtlas Content and Asset Handoff

This document lists every placeholder currently in the site, what real content you need, and exactly where to put it.

## 1) Microsoft Store Link

Status: Placeholder is active.

Current placeholder value:
- `https://www.microsoft.com/store/apps/REPLACE-WITH-SNAPATLAS-ID`

Replace in:
- `src/content/siteContent.ts` under `placeholderLinks.microsoftStore`

Used by:
- `src/pages/download.astro`

What to provide:
- Final public Microsoft Store product URL for SnapAtlas.

## 2) Screenshot Assets You Need

All placeholders are currently stored in:
- `public/images/placeholders/`

Recommended production location:
- `public/images/screenshots/`

Recommended export size for screenshots:
- 1280x720 (16:9)
- PNG preferred for UI screenshots
- Keep text readable at tablet size

### Required feature screenshots

1. Timeline organization screenshot
- Placeholder file: `public/images/placeholders/feature-organize.svg`
- Replace reference in: `src/content/siteContent.ts` (`coreFeatures[0].screenshot`)
- Suggested final file: `public/images/screenshots/feature-organize.png`

2. Duplicate detection screenshot
- Placeholder file: `public/images/placeholders/feature-duplicates.svg`
- Replace reference in: `src/content/siteContent.ts` (`coreFeatures[1].screenshot`)
- Suggested final file: `public/images/screenshots/feature-duplicates.png`

3. Location intelligence screenshot
- Placeholder file: `public/images/placeholders/feature-location.svg`
- Replace reference in: `src/content/siteContent.ts` (`coreFeatures[2].screenshot`)
- Suggested final file: `public/images/screenshots/feature-location.png`

4. Batch processing screenshot
- Placeholder file: `public/images/placeholders/feature-batch.svg`
- Replace reference in: `src/content/siteContent.ts` (`coreFeatures[3].screenshot`)
- Suggested final file: `public/images/screenshots/feature-batch.png`

### Required marketing visuals

5. Before/after transformation image
- Placeholder file: `public/images/placeholders/before-after.svg`
- Used in: `src/pages/index.astro` and `src/content/siteContent.ts` (`coreFeatures[5].screenshot`)
- Suggested final file: `public/images/screenshots/before-after.png`

6. GPS-to-place-name story image
- Placeholder file: `public/images/placeholders/location-rename.svg`
- Used in: `src/pages/index.astro` and `src/content/siteContent.ts` (`coreFeatures[4].screenshot`)
- Suggested final file: `public/images/screenshots/location-rename.png`

## 3) Copy Enhancements Still Needed

Current copy is solid, but these placeholders are still implied and can improve conversion:

1. Quantified outcomes for hero/supporting claims
- File: `src/content/siteContent.ts`
- Fields to update: `heroStats`, `coreFeatures[].bullets`
- Example: real performance numbers from your own runs (photo counts, dedupe counts, runtime).

2. Proof statements for audience use cases
- File: `src/content/siteContent.ts`
- Fields to update: `useCases[].outcome` and `useCases[].highlights`
- Add real scenarios from your own archive cleanup results.

3. FAQ precision
- File: `src/content/siteContent.ts`
- Field: `faqs`
- Add exact behaviors users commonly ask about (formats, drive support, processing scope).

## 4) Where Placeholders Are Displayed

Homepage visuals:
- `src/pages/index.astro`

Feature detail visuals:
- `src/pages/features.astro`

Download CTA link:
- `src/pages/download.astro` via `src/content/siteContent.ts`

## 5) Fast Replacement Workflow

1. Add final assets to `public/images/screenshots/`.
2. Update `coreFeatures[].screenshot` values in `src/content/siteContent.ts`.
3. Update `placeholderLinks.microsoftStore` in `src/content/siteContent.ts`.
4. Run `npm run build`.
5. Verify pages:
- `/`
- `/features`
- `/download`

## 6) Optional Cleanup After Replacement

Once all real assets are live:
- Remove unused SVG placeholders from `public/images/placeholders/`.
- Keep this document for future launch updates, or archive it under `docs/archive/`.
