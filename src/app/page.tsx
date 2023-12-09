import { fetchCountries } from '@/apis/fetchCountries'
import CountryPicker from '@/components/CountryPicker'
import SelectedCountry from '@/components/SelectedCountry'

export default async function Home() {
  const regionCountries = await fetchCountries()

  return (
    <main className="flex  flex-col items-center justify-between">
      <h1>Sanyam Arya</h1>
      <br />
      <CountryPicker regionCountries={regionCountries} />
      <br />
      <SelectedCountry />
    </main>
  )
}
