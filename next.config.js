/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    "DB_URL": "https://hrwqygwyijkdodsnmrsd.supabase.co",
    "DB_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyd3F5Z3d5aWprZG9kc25tcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3MjI5NTAsImV4cCI6MTk5NjI5ODk1MH0.Ps8myYMRCJybdCLkaxTnbkMc3k3hFlOEc-1E96qxfz8"
  }
}

module.exports = nextConfig
