interface SiteConfig {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
	themeColorLight: string;
	themeColorDark: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
}

export const siteConfig: SiteConfig = {
	author: "Jesse Kelly",
	title: "Jesse",
	description: "Jesse Kelly's Personal Website",
	lang: "en-GB",
	ogLocale: "en_GB",
	themeColorLight: "#fafafa",
	themeColorDark: "#1d1f21",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};
