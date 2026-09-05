/**
 * Shell config — valuecreationprotocol.com
 *
 * SINGLE SOURCE: this node's nav / headerHat / mobile-bottom-bar / footer
 * columns / legal / social links come from the shared constellation registry
 * (CONSTELLATION_PRESETS['vcp'].shellConfig in @vf/site-kit), NOT a local
 * literal. The shared SiteShell is the FRAME; the preset is VCP's own IDENTITY
 * within it — the calm, technical, documentation voice ported from the Astro
 * chrome, not a marketing surface.
 *
 * Retired 2026-09-04 (queue card 2026-09-04-retire-remaining-footer-forks).
 * Every field of the former local SHELL_CONFIG was diffed against the preset in
 * this site's INSTALLED kit first, and THREE differed — all of them real per-node
 * intent rather than drift, so all three were PROMOTED UP into the preset
 * (@vf/site-kit 0.22.1) rather than flattened:
 *
 *   navPrimary + the Methodology footer column   gained 'Language of Value'
 *     (/language-of-value, a real route on this site)
 *   footerLegal   points at THIS site's own /privacy and /terms (both real
 *     routes here) rather than the consultancy's. VCP is an open protocol with
 *     its own legal surface; sending its readers off-domain for terms would be a
 *     different claim about what this node is.
 *   navBreakpoint 'lg'   measured, not assumed — the measurement now travels
 *     with the field in the kit (0.22.1). Short version: the shell picks the
 *     horizontal-nav breakpoint from a link COUNT and this node's problem is
 *     label WIDTH, so it states its own answer.
 *
 * Diffed again after the promotion: 0 of 7 fields differ, with the differ
 * calibrated against a deliberately wrong preset first (7 of 7 differ) so the
 * zero means something.
 *
 * When the chrome changes, change the PRESET in the kit and repin — that is now
 * the one edit, and it is why this file no longer holds a copy that can drift.
 *
 * This module stays as the site's stable import point (SiteShell in
 * src/app/layout.tsx imports SHELL_CONFIG from here).
 *
 * Source: constellation registry (@vf/site-kit/registry) — CONSTELLATION_PRESETS['vcp']
 */

import { CONSTELLATION_PRESETS } from '@vf/site-kit/registry';
import type { SiteShellConfig } from '@vf/site-kit/types';

const preset = CONSTELLATION_PRESETS['vcp'];

if (!preset?.shellConfig) {
  throw new Error(
    "CONSTELLATION_PRESETS['vcp'].shellConfig is missing — the Value Creation " +
      'Protocol shell cannot render without its registry preset. Bump ' +
      '@vf/site-kit to a commit whose registry carries the vcp node shellConfig ' +
      '(0.22.1 or later, which is where Language of Value, the site-local legal ' +
      'links and navBreakpoint live).'
  );
}

export const SHELL_CONFIG: SiteShellConfig = preset.shellConfig;
