export const metadata = {
  title: "Sovereign Selfcare",
  description: "Personalized skincare. Formulated in front of you."
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
