import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mikhailo Kravchuk — Web Developer & Bot Engineer",
  description:
    "Full-stack developer specializing in scalable web applications, Telegram/Discord bots, and database architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
