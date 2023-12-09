'use client'
import { IRegion } from '@/apis/fetchCountries'
import Image from 'next/image'
import { useState } from 'react'

interface CountryPickerProps {
  regionCountries: IRegion
}

export default function CountryPicker({ regionCountries }: CountryPickerProps) {
  const [currentRegion, setCurrentRegion] = useState('Asia')
  return (
    <div className="flex flex-col items-center justify-between p-24 w-96 h-96">
      <h1>Arya</h1>
      {/* <pre>{JSON.stringify({ currentRegion, totalRegions: Object.keys(regionCountries) }, null, 1)}</pre> */}
      {/* Tabs for all regions */}
      <div className="flex flex-row items-center justify-between  wrap">
        {Object.keys(regionCountries).map(region => (
          <button
            key={region}
            className={`${currentRegion === region ? 'border-b-2 border-blue-600' : 'border-transparent'} p-2 m-2 `}
            onClick={() => setCurrentRegion(region)}
          >
            {region === '' ? 'Others' : region}
          </button>
        ))}
      </div>
      {/* List of countries in current region */}
      <div className="flex flex-row items-center justify-between  flex-wrap w-96">
        {regionCountries[currentRegion].map(country => (
          <div key={country.name} className="flex flex-row items-center justify-between  wrap px-2">
            <Image src={`/flags/${country.alpha2}.svg`} width={24} height={24} alt={country.name} />
            <h1>{country.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
