import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sovereign Selfcare",
  description: "Personalized skincare. Formulated in front of you."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#ffffff", color: "#111111" }}>{children}</body>
    </html>
  );
}
