import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Louis Okperiruisi | Cybersecurity Analyst Portfolio",
  description:
    "Cybersecurity Analyst skilled in SOC operations, AI security, SIEM, vulnerability management, infrastructure support, and hands-on technical delivery.",
  keywords: [
    "Louis Okperiruisi",
    "Cybersecurity Analyst",
    "SOC Analyst",
    "IT Support Specialist",
    "AI Security",
    "Prompt Injection",
    "SIEM",
    "Wazuh",
    "Nessus",
    "Qualys",
    "Cloud Security",
    "FastAPI",
  ],
  authors: [{ name: "Louis Okperiruisi" }],
  creator: "Louis Okperiruisi",
  publisher: "Louis Okperiruisi",
  metadataBase: new URL("https://louisky.vercel.app"),
  openGraph: {
    title: "Louis Okperiruisi | Cybersecurity Analyst Portfolio",
    description:
      "Portfolio showcasing cybersecurity projects, AI security middleware, SOC labs, certifications, and technical experience.",
    url: "https://example.com",
    siteName: "Louis Okperiruisi Portfolio",
    images: [
      {
        url: "/images/office-work.jpeg",
        width: 1200,
        height: 630,
        alt: "Louis Okperiruisi Cybersecurity Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louis Okperiruisi | Cybersecurity Analyst Portfolio",
    description:
      "Cybersecurity portfolio featuring AI security, SOC labs, projects, certifications, and technical experience.",
    images: ["/images/office-work.jpeg"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}