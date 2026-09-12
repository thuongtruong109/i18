import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Các dòng iPhone — Trải nghiệm 3D tương tác",
  description: "Khám phá đầy đủ iPhone 17 series và các dòng iPhone mới bằng mô hình AR chính thức của Apple.",
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
