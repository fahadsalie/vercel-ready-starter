export default function Home() {
  return (
    <div className="grid">
      <div className="card">
        <h1>Next.js + Vercel: Ready to Deploy</h1>
        <p className="small">This project has no external services or env vars. It will build and run on Vercel as-is.</p>
      </div>
      <div className="card">
        <h2>What’s included</h2>
        <ul>
          <li>App Router (Next.js 14)</li>
          <li>TypeScript setup</li>
          <li>Static pages that build without config</li>
        </ul>
      </div>
      <div className="card">
        <h2>Next steps</h2>
        <ol>
          <li>Connect this repo to Vercel</li>
          <li>Deploy — no environment variables needed</li>
        </ol>
      </div>
    </div>
  );
}
