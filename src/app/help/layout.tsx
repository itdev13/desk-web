import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HelmDesk Help Center — Setup & Feature Guides",
  description:
    "How to set up and run your white-label helpdesk: tickets, inbox, board, dashboard, team, settings, client portal, SLAs, plans and more.",
};

export default function HelpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
