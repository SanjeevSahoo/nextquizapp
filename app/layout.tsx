import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Gen Quiz App",
  description: "Quiz App for Internal Use",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
