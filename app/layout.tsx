import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruth James | Backend Engineer",
  description:
    "Backend-focused software engineer building production web applications, APIs, fintech systems, and third-party integrations with Laravel, Node.js, NestJS, TypeScript, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#f0f0f0] antialiased">
        {children}
      </body>
    </html>
  );
}
