import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vercel-Ready Starter',
  description: 'A minimal Next.js app that deploys cleanly on Vercel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
            <strong>Vercel Starter</strong>
          </div>
          <div style={{display:'flex', gap:'10px'}}>
            <Link className="btn" href="/">Home</Link>
            <Link className="btn" href="/dashboard">Dashboard</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
