// NOTE: This file is deprecated/unused. The actual services data source
// used by the site is `./services-data.ts` (kebab-case filename), which
// already existed with all 14 services wired up to ServicesClient and the
// /services/[slug] route. This file is kept only as a placeholder to avoid
// a broken import if anything referenced it; it re-exports the real data.
export { SERVICES, getServiceBySlug } from "./services-data";
