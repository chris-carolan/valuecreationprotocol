/**
 * Machine-readable XML sitemap → /sitemap.xml (Next.js metadata route).
 *
 * DERIVED, not listed. This used to hold a hand-maintained ROUTES array, which
 * meant /sitemap.xml and /llms.txt were two indexes of the same site kept in
 * agreement by hand — and /llms.txt already derived itself from the build-time
 * route-walk. Any route added without remembering to edit this file would have
 * appeared in one index and not the other, silently. Both now come off the same
 * walk (@vf/recipes/sitemap), so a new page is indexed by existing.
 *
 * The human-readable /sitemap page excludes itself from both (it indexes the
 * others); that exclusion lives in the shared recipe, not here.
 */
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { sitemapEntries } from '@vf/recipes/sitemap';
import { SITE } from '@/lib/site';

// Required for `output: 'export'` — the sitemap route must be statically generated.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries({
    appDir: path.join(process.cwd(), 'src/app'),
    baseUrl: SITE.url,
  });
}
