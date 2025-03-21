import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Abdullah Radwan",
  icons: {
    icon: "/images/port.png",
    shortcut: "/port.png",
    apple: "/port.png",
    other: [
      {
        rel: "icon",
        url: "/port.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/port.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
