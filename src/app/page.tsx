import SelectedCountry from '@/components/SelectedCountry'

export default async function Home() {
  return (
    <main className="flex  flex-col items-center justify-between gap-4">
      <h1 className="text-4xl font-bold text-center">Welcome to Sanyam's Next.js App</h1>
      <p className="text-xl text-center">Select a country from the dropdown to get started</p>
      <SelectedCountry />
    </main>
  )
}
