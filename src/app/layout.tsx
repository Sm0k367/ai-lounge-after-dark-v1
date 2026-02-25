import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Lounge After Dark',
  description: 'Create stunning visuals with AI. Collaborate in real-time. Stream to millions.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lounge-darker text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}
