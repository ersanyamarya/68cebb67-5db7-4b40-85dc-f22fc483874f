import { fetchCountries } from '@/apis/fetchCountries'
import CountryPicker from '@/components/CountryPicker'
import Image from 'next/image'

export default async function Home() {
  const regionCountries = await fetchCountries()
  return (
    <main className="flex  flex-col items-center justify-between">
      <h1>Sanyam</h1>

      <CountryPicker regionCountries={regionCountries} />
      <Image src="/flags/ad.svg" width={200} height={200} alt="Sanyam" />
    </main>
  )
}
