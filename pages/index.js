import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Dashboard/>
    </div>
  )
}
