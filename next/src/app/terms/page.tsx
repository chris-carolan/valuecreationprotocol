/**
 * /terms — Terms of use for valuecreationprotocol.com.
 *
 * Companion to /privacy; same reason for existing (the footer's Terms link went
 * to valuefirstteam.com's terms, which govern that site). Shell reused from
 * CanonArchetype + .canon-prose.
 *
 * ON THE LICENSING SECTION — do not tighten this into a named license.
 * This repo has no LICENSE file and the site names no license identifier. The
 * only authored statements are (a) /engagement: "No license, no permission
 * required. The protocol is open." and (b) the footer copyright line. This page
 * reproduces that position and does not invent a CC/MIT/other grant on top of
 * it; naming one here would manufacture a legal term nobody chose. If a license
 * is ever ratified, it lands in a LICENSE file first and this page cites it.
 */
// hand-roll-exempt: legal prose, rendered through this site's shared canon shell —
// CanonArchetype wrapping a .canon-prose block from vcp-archetypes.css, the same
// shell and stylesheet every canon page here renders through. The page emits only
// the h2/p/ul that stylesheet styles and adds no layout of its own. The global shell
// above it (SiteShell, header, footer) is @vf/site-kit, applied in app/layout.tsx.
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { CanonArchetype } from '@/components/CanonArchetype';

const LAST_UPDATED = '9 August 2026';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'Terms of use for valuecreationprotocol.com — what you may do with the published protocol, and what this site does and does not warrant.',
  openGraph: { url: SITE.url + '/terms' },
  alternates: { canonical: SITE.url + '/terms' },
};

export default function TermsPage() {
  return (
    <CanonArchetype
      eyebrow="LEGAL"
      title="Terms"
      lead="The protocol is published to be read, cited, and run by anyone. These terms cover the website that publishes it — what you can rely on, and what you cannot."
      path="/terms"
      specMeta={[
        { label: 'Covers', value: 'valuecreationprotocol.com' },
        { label: 'Last updated', value: LAST_UPDATED },
        { label: 'Operator', value: 'Conveying Your Message LLC dba Value-First Team' },
      ]}
    >
      <div className="canon-prose">
        <p>
          Conveying Your Message LLC, doing business as Value-First Team, publishes this site as the
          canonical home of the Value Creation Protocol. Using the site means these terms apply to
          you. They govern <strong>valuecreationprotocol.com</strong> only; other sites in the
          Value-First constellation publish their own.
        </p>

        <h2>Using the protocol</h2>
        <p>
          The protocol is open. You may read it, quote it, cite it, teach it, build on it, and
          operate it on your own work or your clients&apos; work, without asking us and without
          entering any agreement with us. No permission is required and none is granted conditionally
          — that is the point of publishing a protocol rather than a product.
        </p>
        <p>
          Two ordinary limits apply. Attribution is expected where you are reproducing the protocol
          rather than merely applying it: cite the Value Creation Protocol and link to this site, so
          a reader can reach the source. And openness covers the protocol&apos;s{' '}
          <em>content</em> — the specifications, the methodology, the vocabulary. It does not
          transfer the Value-First Team and Value Creation Protocol names, marks, or the visual
          design of this site, which remain the company&apos;s. Applying the protocol does not make
          you a representative of Value-First Team, and does not imply we reviewed or endorsed your
          implementation.
        </p>

        <h2>What this site does not warrant</h2>
        <p>
          The protocol and everything on this site are published as-is, for information. They are not
          professional, legal, financial, or tax advice, and reading them creates no advisory
          relationship. Adopting a methodology is a judgment call in your own context: we do not
          warrant any particular outcome from operating the protocol, and to the fullest extent the
          law allows, Conveying Your Message LLC is not liable for losses arising from decisions you
          make in reliance on it. Where liability cannot be excluded, it is limited to the minimum
          the law permits.
        </p>
        <p>
          The protocol is at <strong>v0.1</strong> and is explicitly in draft. Specifications on this
          site can change, and pages can be revised or withdrawn as the work develops. If you need a
          fixed reference, cite the version and the date you read it.
        </p>

        <h2>Availability</h2>
        <p>
          We do not promise the site will be uninterrupted or error-free, and we may change or
          withdraw any part of it without notice. Nothing here is a service commitment; engagements
          with Value-First Team are separate agreements with their own terms, and nothing on this
          site varies them.
        </p>

        <h2>Links away from this site</h2>
        <p>
          This site links to peer protocol homes, to the implementing firm, to other sites in the
          Value-First constellation, and to GitHub. We do not control those destinations and are not
          responsible for their content or their terms.
        </p>

        <h2>Privacy</h2>
        <p>
          How this site handles information — including the HubSpot tracking that runs on every page
          — is described in the <a href="/privacy">privacy notice</a>.
        </p>

        <h2>Changes</h2>
        <p>
          When these terms change, the &ldquo;Last updated&rdquo; date above changes with them.
          Continuing to use the site after that constitutes acceptance of the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          <strong>Conveying Your Message LLC dba Value-First Team</strong>
          <br />
          <a href="mailto:chris.carolan@valuefirstteam.com">chris.carolan@valuefirstteam.com</a>
        </p>
        <p>
          These terms are governed by the laws of the State of Texas. They are prepared for attorney
          review and are not legal advice.
        </p>
      </div>
    </CanonArchetype>
  );
}
