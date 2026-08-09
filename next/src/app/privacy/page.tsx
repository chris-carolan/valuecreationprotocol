/**
 * /privacy — Privacy notice for valuecreationprotocol.com.
 *
 * Authored for THIS site, not ported. The footer previously sent Privacy and
 * Terms to valuefirstteam.com, whose notice states in its own words that it
 * "covers valuefirstteam.com only" — so a reader arriving from here landed on a
 * document that explicitly disclaimed this domain while HubSpot's tracking
 * script was already running on every page here.
 *
 * The substance is site-specific by nature (a notice is only worth anything if
 * it is true about the surface serving it), so this is not a shared component:
 * what IS reused is the shell — CanonArchetype + .canon-prose, the same shell
 * every canon page on this site renders through.
 *
 * Every factual claim below is checked against the live tree:
 *   - HubSpot loader, site-wide, ungated  → app/layout.tsx (Script id="hs-script-loader",
 *     src //js.hs-scripts.com/40810431.js, strategy afterInteractive). No consent gate
 *     exists anywhere in this repo, so the notice must not imply one.
 *   - Google Fonts from Google's origins  → app/layout.tsx <link> preconnect + stylesheet.
 *   - localStorage 'vf-theme'             → app/layout.tsx FOUC-free theme init script.
 *   - Zero forms/inputs/booking embeds    → no <form>, <input>, <textarea>, hbspt, or
 *     meetings.hubspot embed exists in src/. Do not add a "what you submit" section
 *     unless that changes.
 */
// hand-roll-exempt: legal prose, rendered through this site's shared canon shell —
// CanonArchetype (hero + body + implementer band) wrapping a .canon-prose block from
// vcp-archetypes.css, which styles the h2/p/ul/li this page emits. That is the same
// shell and the same stylesheet every canon page here renders through, and the page
// adds no layout of its own. The global shell above it (SiteShell, header, footer) is
// @vf/site-kit, applied in app/layout.tsx.
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { CanonArchetype } from '@/components/CanonArchetype';

const LAST_UPDATED = '9 August 2026';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What valuecreationprotocol.com collects, what it does not, and the third parties involved. This site runs no forms and no accounts; it does load HubSpot tracking on every page.',
  openGraph: { url: SITE.url + '/privacy' },
  alternates: { canonical: SITE.url + '/privacy' },
};

export default function PrivacyPage() {
  return (
    <CanonArchetype
      eyebrow="LEGAL"
      title="Privacy"
      lead="This site publishes a protocol. It has no accounts, no forms, and nothing to sign up for — but it does load HubSpot's tracking script on every page, and that is worth saying plainly rather than burying."
      path="/privacy"
      specMeta={[
        { label: 'Covers', value: 'valuecreationprotocol.com' },
        { label: 'Last updated', value: LAST_UPDATED },
        { label: 'Operator', value: 'Conveying Your Message LLC dba Value-First Team' },
      ]}
    >
      <div className="canon-prose">
        <p>
          Conveying Your Message LLC, doing business as Value-First Team, operates this site as the
          canonical home of the Value Creation Protocol. This notice describes how this domain —{' '}
          <strong>valuecreationprotocol.com</strong> — handles information. It covers this site only.
          Other sites in the Value-First constellation publish their own notices, and the protocol
          text itself carries no data practices at all.
        </p>

        <h2>What this site does not collect</h2>
        <p>
          There is nothing here to fill in. This site has no contact form, no newsletter signup, no
          booking scheduler, no comment field, no search box that reaches a server, no user accounts,
          no login, no checkout, and no AI chat widget. No page asks you for your name or your email
          address, so none is collected from you directly. If that ever changes, this notice has to
          change before the new surface goes live.
        </p>

        <h2>What is collected automatically</h2>
        <p>
          <strong>HubSpot tracking, on every page.</strong> This site loads HubSpot&apos;s tracking
          script (portal 40810431) in the page head, on every route, for every visitor. It is not
          gated behind a cookie banner and there is no consent prompt on this site — the script runs
          as soon as the page becomes interactive. It sets HubSpot&apos;s cookies in your browser and
          reports your page views, along with technical information such as your IP address, browser
          and device type, and the page you arrived from. Where HubSpot can already recognize your
          browser — most commonly because you have previously clicked a link in an email from
          Value-First Team, or submitted a form on another Value-First site — it may associate this
          site&apos;s page views with an existing contact record in our CRM. HubSpot processes this
          data on our behalf as a data processor.
        </p>
        <p>
          <strong>Fonts served by Google.</strong> Typefaces on this site are requested from Google
          Fonts (fonts.googleapis.com and fonts.gstatic.com). Your browser contacts Google&apos;s
          servers to fetch them, which means Google receives your IP address and standard request
          headers as part of serving the files.
        </p>
        <p>
          <strong>Hosting logs.</strong> This site is hosted on Vercel, which serves the pages and
          may log ordinary web-server data — IP addresses, request timestamps, and related technical
          metadata — as part of normal operation.
        </p>
        <p>
          <strong>A theme preference in your browser.</strong> If you switch between light and dark,
          the choice is written to your browser&apos;s local storage under the key{' '}
          <code>vf-theme</code>. It stays on your device, is not transmitted to us, and clearing your
          browser storage removes it.
        </p>

        <h2>How this information is used</h2>
        <p>
          The tracking described above tells us which parts of the protocol people actually read, and
          which are ignored — that is the whole of the intent behind it. Where it associates with an
          existing contact record, it becomes part of the history of a relationship we already have.
          We do not sell personal information. We do not run advertising trackers, we do not place
          this data with ad networks, and we do not use session-recording tools on this site.
        </p>

        <h2>Cookies, and how to refuse them</h2>
        <p>
          This site sets no cookies of its own. The cookies you will find are HubSpot&apos;s, set by
          the tracking script described above. Because nothing on this site depends on them — there
          is no login to stay signed in to and no form to remember — you can block or delete them and
          every page here will work exactly as before. Most browsers can block third-party cookies or
          clear them per site; a tracker-blocking extension will also stop the script outright, with
          no effect on your ability to read the protocol.
        </p>

        <h2>Your rights</h2>
        <p>You are entitled to ask us to:</p>
        <ul>
          <li>Tell you what information we hold that is associated with you.</li>
          <li>Correct it, or delete it.</li>
          <li>Stop processing it, or stop contacting you.</li>
        </ul>
        <p>
          Write to the address below and we will respond within 30 days. Where a legal obligation
          requires us to keep certain records, we will tell you that rather than quietly keeping them.
        </p>
        <p>
          <strong>California residents.</strong> Under the California Consumer Privacy Act, you have
          additional rights, including the right to know what personal information is collected, to
          request its deletion, and to opt out of its sale. We do not sell personal information. Use
          the contact address below to exercise these rights.
        </p>
        <p>
          <strong>Visitors in the UK and EEA.</strong> Where the UK GDPR or EU GDPR applies to you,
          our basis for the analytics described above is legitimate interest in understanding how the
          published protocol is read. You may object to that processing using the contact address
          below, and you can stop it yourself at any time by blocking the script or its cookies.
        </p>

        <h2>Links away from this site</h2>
        <p>
          This site links to peer protocol homes (modelcontextprotocol.io, humancontextprotocol.com),
          to the implementing firm at valuefirstteam.com, to other sites in the Value-First
          constellation, and to GitHub. Each has its own privacy practices and its own notice. This
          one covers valuecreationprotocol.com.
        </p>

        <h2>Children</h2>
        <p>
          This site is not directed to anyone under 18 and we do not knowingly collect personal
          information from children. If you believe we have, contact us and we will delete it.
        </p>

        <h2>Changes</h2>
        <p>
          When this notice changes, the &ldquo;Last updated&rdquo; date above changes with it. Adding
          any new data surface to this site — a form, an account, analytics beyond HubSpot, an
          embedded scheduler — requires this notice to be updated before that surface goes live.
        </p>

        <h2>Contact</h2>
        <p>
          <strong>Conveying Your Message LLC dba Value-First Team</strong>
          <br />
          <a href="mailto:chris.carolan@valuefirstteam.com">chris.carolan@valuefirstteam.com</a>
        </p>
        <p>
          This notice is governed by the laws of the State of Texas. It is prepared for attorney
          review and is not legal advice; it describes this site&apos;s actual behavior as of the
          date above.
        </p>
      </div>
    </CanonArchetype>
  );
}
