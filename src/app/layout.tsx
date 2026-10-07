import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "HelmDesk — Support Ticket System & Helpdesk",
  description:
    "A fully white-label helpdesk for your sub-accounts — turn every customer message into a tracked support ticket, branded as your own.",
  icons: {
    icon: "/helmdesk-icon.svg",
  },
  keywords: [
    "support ticket system",
    "ticketing system",
    "helpdesk",
    "help desk",
    "support desk",
    "ticket queue",
    "kanban tickets",
    "customer support",
    "ticket management",
    "white-label helpdesk",
  ],
  openGraph: {
    title: "HelmDesk — Support Ticket System & Helpdesk",
    description:
      "A fully white-label helpdesk for your sub-accounts — turn every customer message into a tracked support ticket, branded as your own.",
    type: "website",
    images: ["/helmdesk-icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: "light" }}>
      <body className={`${caveat.variable} antialiased bg-[#FFF9EB] text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
