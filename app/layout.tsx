import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "maahez-tribute.pages.dev";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "MAAHEZ — In Memory of Mauro Menendez";
  const description =
    "A tribute to MAAHEZ—Mauro Menendez. Listen to his music, share memories, explore the photo archive, and support his family through official merchandise.";

  return {
    title,
    description,
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      title,
      description: "The music stays. A tribute to MAAHEZ—Mauro Menendez.",
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1731,
          height: 909,
          alt: "MAAHEZ — In memory of Mauro Menendez",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "The music stays. A tribute to MAAHEZ—Mauro Menendez.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
