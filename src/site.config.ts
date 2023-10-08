import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Altema Marek Kamiński",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Lokale biurowe do wynajęcia",
	// Meta property used as the default description meta property
	description: "Lokale i przestrzenie biurowe do wynajęcia Białystok",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "pl-PL",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "pl_PL",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "pl-PL",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
	includeViewTransitions: false,
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Strona główna",
		path: "/",
	},
	{
		title: "O budynku",
		path: "/budynek/",
	},
	{
		title: "Kontakt",
		path: "/kontakt/",
	},
];
