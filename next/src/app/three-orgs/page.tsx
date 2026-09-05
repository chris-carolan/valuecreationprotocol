/**
 * /three-orgs — the canonical framework module, hosted. A THIN ROUTE.
 *
 * Nothing about the framework is authored here: the words come from the one
 * derived copy of canon in @vf/brand (gated against canon by main-brain-lint
 * CN1), the module's shape is the one the other framework modules share, and the
 * media join is read once at build by FrameworkRoute. Edit the framework in
 * .products/vf-brand/src/ and re-pin. Do not add a section here.
 *
 * This REPLACED an authored page that rendered Sanity `threeOrg` records — a
 * second author of the model's names, purposes and boundaries. The retirement,
 * and what those records carried that canon does not, is named in the commit.
 */
import type { Metadata } from 'next';
import { FrameworkRoute, frameworkMetadata } from '@/components/FrameworkRoute';

const FRAMEWORK = 'three-org-model' as const;

export const metadata: Metadata = frameworkMetadata(FRAMEWORK);

export default function Page() {
  return <FrameworkRoute framework={FRAMEWORK} />;
}
