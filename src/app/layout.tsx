import type { Metadata, Viewport } from "next";
import { body, display, mono } from "@/lib/fonts";
import "@/styles/globals.css";
import { RouteProvider } from "@/providers/route-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { cx } from "@/utils/cx";

export const metadata: Metadata = {
	title: "Plantilla de Next.js",
	description: "Esto es una plantilla de Next.js, revisa el README.md",
};

export const viewport: Viewport = {
	colorScheme: "light",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={cx(
				body.variable,
				display.variable,
				mono.variable,
				"scroll-smooth",
			)}
			suppressHydrationWarning
		>
			<body className="bg-primary text-tertiary antialiased">
				<RouteProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</RouteProvider>
			</body>
		</html>
	);
}
