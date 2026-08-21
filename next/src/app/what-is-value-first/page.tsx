/**
 * /what-is-value-first — the constellation's shared answer to its own name.
 *
 * A THIN ROUTE. The page itself — words, order, composition — is one shared
 * entity in @vf/site-kit (`WhatIsValueFirst`), hosted at the same path on every
 * Value-First property by Chris's ruling of 2026-08-21. Nothing about the page
 * is authored here on purpose: twelve authored copies would drift the first time
 * a sentence changed, and several sentences changed that day.
 *
 * Edit the page in .products/vf-site-kit/src/components/pages/WhatIsValueFirst.tsx
 * and re-pin. Do not add a section here.
 *
 * React Server Component, statically exported like every other route on this
 * site. The title and description come from the kit too, so twelve title tags
 * cannot drift either; only the absolute OG url is this property's own.
 */
import type { Metadata } from 'next';
import {
  WhatIsValueFirst,
  WHAT_IS_VALUE_FIRST_PATH,
  WHAT_IS_VALUE_FIRST_TITLE,
  WHAT_IS_VALUE_FIRST_DESCRIPTION,
} from '@vf/site-kit';

const URL = `https://valuecreationprotocol.com${WHAT_IS_VALUE_FIRST_PATH}`;

export const metadata: Metadata = {
  title: WHAT_IS_VALUE_FIRST_TITLE,
  description: WHAT_IS_VALUE_FIRST_DESCRIPTION,
  openGraph: {
    title: WHAT_IS_VALUE_FIRST_TITLE,
    description: WHAT_IS_VALUE_FIRST_DESCRIPTION,
    url: URL,
  },
};

export default function WhatIsValueFirstRoute() {
  return <WhatIsValueFirst />;
}
