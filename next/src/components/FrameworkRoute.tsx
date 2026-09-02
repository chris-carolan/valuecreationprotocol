/**
 * FrameworkRoute — the thin host for one canonical framework module on this property.
 *
 * Chris ruled 2026-09-01 that nothing is elevated on only one site: the five
 * framework modules are shared entities on every Value-First property. So this
 * file is the WHOLE of what this property adds around a module — the site's canon
 * shell (eyebrow, display, lead, spec meta, the implementer cross-citation) fed
 * from the module's own claim words, a DefinedTermSet for search engines derived
 * from the same copy, and the media join read once at build. Not one framework
 * sentence is written here. Edit the framework in @vf/brand and re-pin.
 *
 * The five authored pages this replaced (beliefs, twelve-traps, value-path,
 * unified-views, realities — each a Sanity-fed React port of an Astro page, each
 * a second author of names, counts and order) are retired by the commit that
 * introduced this file; the retirement is named there.
 */
import type { Metadata } from 'next';
import {
  FrameworkModule,
  frameworkClaim,
  VALUE_PATH_STAGES,
  CORE_BELIEFS,
  UNIFIED_VIEWS,
  COMPLEXITY_TRAPS,
  VALUE_REALITIES,
  type FrameworkKey,
} from '@vf/brand';
import { SITE } from '@/lib/site';
import { CanonArchetype } from '@/components/CanonArchetype';
import { JsonLd } from '@/components/JsonLd';
import { frameworkMedia } from '@/lib/framework-media';

/** The route each framework lives at on THIS property (its canon shell keys cross-citation by path). */
export const FRAMEWORK_PATHS: Record<FrameworkKey, string> = {
  'core-beliefs': '/beliefs',
  'complexity-traps': '/twelve-traps',
  'value-path': '/value-path',
  'unified-views': '/unified-views',
  'value-realities': '/realities',
};

/** The OG image this property already ships for each framework route. */
const OG: Record<FrameworkKey, string> = {
  'core-beliefs': '/og/og-beliefs.jpg',
  'complexity-traps': '/og/og-twelve-traps.jpg',
  'value-path': '/og/og-value-path.jpg',
  'unified-views': '/og/og-unified-views.jpg',
  'value-realities': '/og/og-realities.jpg',
};

/** Page metadata composed from the module's own claim — the title tag cannot drift from the page. */
export function frameworkMetadata(framework: FrameworkKey): Metadata {
  const claim = frameworkClaim(framework);
  const path = FRAMEWORK_PATHS[framework];
  return {
    title: claim.eyebrow.replace(/^The /, ''),
    description: claim.headline,
    openGraph: { url: SITE.url + path, images: [OG[framework]] },
    alternates: { canonical: SITE.url + path },
  };
}

/** The framework's items as schema.org DefinedTerms — names and order from the derived copy. */
function definedTerms(framework: FrameworkKey): { name: string; description: string; code: string }[] {
  switch (framework) {
    case 'value-path':
      return VALUE_PATH_STAGES.map((s) => ({ name: s.name, description: `"${s.mantra}" — ${s.meaning}`, code: `vp-${s.order}` }));
    case 'core-beliefs':
      return CORE_BELIEFS.map((b) => ({ name: b.name, description: b.meaning, code: `belief-${b.order}` }));
    case 'unified-views':
      return UNIFIED_VIEWS.map((v) => ({ name: v.name, description: v.meaning, code: v.id.toLowerCase() }));
    case 'complexity-traps':
      return COMPLEXITY_TRAPS.map((t) => ({ name: `The ${t.name}`, description: t.meaning, code: t.slug }));
    case 'value-realities':
      return VALUE_REALITIES.map((r) => ({ name: r.name, description: r.corePrinciple, code: r.slug }));
  }
}

export async function FrameworkRoute({ framework }: { framework: FrameworkKey }) {
  const claim = frameworkClaim(framework);
  const path = FRAMEWORK_PATHS[framework];
  const media = await frameworkMedia(framework);
  const terms = definedTerms(framework);

  const ld = {
    '@context': 'https://schema.org',
    '@graph': terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.name,
      description: t.description,
      termCode: t.code,
      inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Value Creation Protocol Glossary', url: `${SITE.url}/glossary` },
    })),
  };

  return (
    <>
      <JsonLd data={ld} />
      <CanonArchetype
        eyebrow={claim.eyebrow}
        title={claim.headline}
        lead={claim.lines[0] ?? ''}
        path={path}
        specMeta={[
          { label: 'Status', value: 'canonical' },
          { label: 'Cite', value: `valuecreationprotocol.com${path}` },
          { label: 'Source', value: 'one derived copy of canon, gated' },
        ]}
      >
        <FrameworkModule
          framework={framework}
          media={media}
          showClaim={false}
          hrefs={{ trap: (slug) => `${FRAMEWORK_PATHS['complexity-traps']}#trap-${slug}` }}
        />
      </CanonArchetype>
    </>
  );
}
