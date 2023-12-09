'use client'
import { useCountryStore } from '@/store/country'
import Image from 'next/image'
export default function SelectedCountry() {
  const { selectedCountry } = useCountryStore(state => state)
  return (
    <div
      className="flex items-center justify-center flex-col p-6 shadow-lg gap-4 bg-gray-100 rounded-lg
    hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <Image
        src={`/flags/${selectedCountry.alpha2}.svg`}
        width={240}
        height={240}
        alt={selectedCountry.name}
        className="mr-2 border border-gray-900 rounded-lg"
      />

      <h2 className="text-2xl font-bold">{selectedCountry.name}</h2>
    </div>
  )
}
