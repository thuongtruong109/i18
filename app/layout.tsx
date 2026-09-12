import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Product Lab — Trải nghiệm 3D tương tác",
  description: "Khám phá các nhóm sản phẩm Apple và mô hình AR chính thức trong catalog 3D tương tác.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
