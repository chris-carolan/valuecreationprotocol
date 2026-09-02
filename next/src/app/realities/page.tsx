/**
 * /realities — the canonical framework module, hosted. A THIN ROUTE.
 *
 * Nothing about the framework is authored here: the words come from the one
 * derived copy of canon in @vf/brand (gated against canon by main-brain-lint
 * MC1), the feel is the one Chris ruled on 2026-09-02, and the media join is
 * read once at build by FrameworkRoute. Edit the framework in
 * .products/vf-brand/src/ and re-pin. Do not add a section here.
 */
import type { Metadata } from 'next';
import { FrameworkRoute, frameworkMetadata } from '@/components/FrameworkRoute';

const FRAMEWORK = 'value-realities' as const;

export const metadata: Metadata = frameworkMetadata(FRAMEWORK);

export default function Page() {
  return <FrameworkRoute framework={FRAMEWORK} />;
}
