/**
 * FrameworkRoute — the thin host for one canonical framework module on this property.
 *
 * Chris ruled 2026-09-01 that nothing is elevated on only one site: the seven
 * framework modules are shared entities on every Value-First property. So this
 * file is the WHOLE of what this property adds around a module — the site's canon
 * shell (eyebrow, display, lead, spec meta, the implementer cross-citation) fed
 * from the module's own claim words, and the media join read once at build. Not
 * one framework sentence is written here. Edit the framework in @vf/brand and
 * re-pin.
 *
 * ==========================================================================
 * THE TABLES COME FROM THE KIT NOW (2026-09-05)
 * ==========================================================================
 *
 * This file wrote its own route table, its own three compass service URLs, its
 * own schema.org DefinedTerm switch and its own page-metadata composer. Every one
 * of those is a fact about the CONSTELLATION, not about this property, so they
 * were promoted into `@vf/site-kit/framework` before a second property could copy
 * them — Global-first, promote before the second copy. They are imported here and
 * the local copies are deleted, so a change to any of them reaches this property
 * by moving one pin.
 *
 * WHAT DID NOT MOVE, AND WHY. The kit also ships `FrameworkPage`, a whole route
 * that frames the module in the kit's own marketing `Hero`. This property cannot
 * use it: every canon page here is wrapped in `CanonArchetype`, which carries the
 * canon hero, the spec-meta strip, the build-time peer cross-citation and the
 * implementer band — this site's shell, and the thing that makes a canon page on
 * this property read as a specification rather than as marketing. A page frame is
 * genuinely this property's, so the shell stays and the tables are adopted. The
 * plate bytes and the OG cards stay too, for the reason the kit states: a library
 * cannot portably import a host's PNG, and it cannot ship a property's social card.
 */
import type { Metadata } from 'next';
import { FrameworkModule, frameworkClaim, type FrameworkKey } from '@vf/brand';
import {
  FRAMEWORK_PATHS,
  COMPASS_SERVICES,
  frameworkPageMetadata,
  frameworkJsonLd,
} from '@vf/site-kit/framework';
import { SITE } from '@/lib/site';
import { CanonArchetype } from '@/components/CanonArchetype';
import { JsonLd } from '@/components/JsonLd';
import { frameworkMedia } from '@/lib/framework-media';

// The AI-Native Shift plates this property serves. Static imports straight out of
// @vf/brand's "./assets/*" export, so the bytes are the package's and this repo
// stores no copy of them; Next fingerprints and serves each one. All eight files
// are imported because PlateStrip chooses the dark or the light variant in the
// browser, from the theme the reader is actually in.
import plateFiveLayersDark from '@vf/brand/assets/ai-native-shift/ans-five-layers-dark.png';
import plateFiveLayersLight from '@vf/brand/assets/ai-native-shift/ans-five-layers-light.png';
import plateTodayVsDoneDark from '@vf/brand/assets/ai-native-shift/ans-today-vs-done-dark.png';
import plateTodayVsDoneLight from '@vf/brand/assets/ai-native-shift/ans-today-vs-done-light.png';
import plateAttackWrongEndDark from '@vf/brand/assets/ai-native-shift/ans-attack-wrong-end-dark.png';
import plateAttackWrongEndLight from '@vf/brand/assets/ai-native-shift/ans-attack-wrong-end-light.png';
import plateTensionHeldDark from '@vf/brand/assets/ai-native-shift/ans-tension-held-dark.png';
import plateTensionHeldLight from '@vf/brand/assets/ai-native-shift/ans-tension-held-light.png';

/** A plate filename → the URL this property serves it from. Unknown file → no image. */
const PLATE_URLS: Record<string, { src: string }> = {
  'ans-five-layers-dark.png': plateFiveLayersDark,
  'ans-five-layers-light.png': plateFiveLayersLight,
  'ans-today-vs-done-dark.png': plateTodayVsDoneDark,
  'ans-today-vs-done-light.png': plateTodayVsDoneLight,
  'ans-attack-wrong-end-dark.png': plateAttackWrongEndDark,
  'ans-attack-wrong-end-light.png': plateAttackWrongEndLight,
  'ans-tension-held-dark.png': plateTensionHeldDark,
  'ans-tension-held-light.png': plateTensionHeldLight,
};
const plates = (file: string): string => PLATE_URLS[file]?.src ?? '';

/**
 * The route table is re-exported rather than re-declared, so anything on this
 * property that keys off a framework path reads the constellation's one copy.
 */
export { FRAMEWORK_PATHS };

/** The OG image this property already ships for each framework route. */
const OG: Record<FrameworkKey, string> = {
  'core-beliefs': '/og/og-beliefs.jpg',
  'complexity-traps': '/og/og-twelve-traps.jpg',
  'value-path': '/og/og-value-path.jpg',
  'unified-views': '/og/og-unified-views.jpg',
  'value-realities': '/og/og-realities.jpg',
  'five-layer-model': '/og/og-five-layers.png',
  'three-org-model': '/og/og-three-orgs.jpg',
};

/**
 * Page metadata composed from the module's own claim — the title tag cannot drift
 * from the page, because both read the same canon. The composition is the kit's;
 * what this property adds is its own OG card.
 */
export function frameworkMetadata(framework: FrameworkKey): Metadata {
  return frameworkPageMetadata(framework, SITE.url, { ogImage: OG[framework] }) as Metadata;
}

export async function FrameworkRoute({ framework }: { framework: FrameworkKey }) {
  const claim = frameworkClaim(framework);
  const path = FRAMEWORK_PATHS[framework];
  const media = await frameworkMedia(framework);

  return (
    <>
      <JsonLd
        data={frameworkJsonLd(framework, SITE.url, {
          name: 'Value Creation Protocol Glossary',
          url: `${SITE.url}/glossary`,
        })}
      />
      <CanonArchetype
        eyebrow={claim.eyebrow}
        title={claim.headline}
        lead={claim.lines[0] ?? ''}
        path={path}
        specMeta={[
          { label: 'Status', value: 'canonical' },
          { label: 'Cite', value: `valuecreationprotocol.com${path}` },
          { label: 'Source', value: 'Generated from the canonical reference and checked against it on every build' },
        ]}
      >
        <FrameworkModule
          framework={framework}
          media={media}
          showClaim={false}
          hrefs={{
            trap: (slug) => `${FRAMEWORK_PATHS['complexity-traps']}#trap-${slug}`,
            // The other direction, added 2026-09-04: the Realities page has always
            // linked to every trap by name, and a reader who recognized themselves on
            // the traps page was left with the room and nothing else. Each Reality card
            // already carries `id="reality-<slug>"`, so the landing point exists.
            reality: (slug) => `${FRAMEWORK_PATHS['value-realities']}#reality-${slug}`,
          }}
          decideEndpoint={COMPASS_SERVICES.decide}
          recognizeEndpoint={COMPASS_SERVICES.recognize}
          translateEndpoint={COMPASS_SERVICES.translate}
          plates={plates}
        />
      </CanonArchetype>
    </>
  );
}
