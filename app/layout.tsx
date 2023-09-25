import "./globals.css";
import NextAuthProvider from "./NextAuthProvider";
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
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
