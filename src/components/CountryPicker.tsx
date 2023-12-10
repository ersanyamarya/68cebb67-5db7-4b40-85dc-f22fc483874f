'use client'
import { IRegion } from '@/apis/fetchCountries'
import { useCountryStore } from '@/store/country'
import Image from 'next/image'
import { useState } from 'react'
interface CountryPickerProps {
  regionCountries: IRegion
}

export default function CountryPicker({ regionCountries }: CountryPickerProps) {
  const [currentRegion, setCurrentRegion] = useState('Asia')
  const [showPicker, setShowPicker] = useState(false)
  const { setSelectedCountry, selectedCountry } = useCountryStore(state => state)
  const handleButtonClick = () => {
    setShowPicker(!showPicker)
  }
  return (
    <>
      <div className={` bg-transparent h-full relative`}>
        <button
          className="font-bold py-2 pl-2 pr-4 rounded flex flex-row items-center justify-start gap-4 w-max bg-white truncate
          hover:transform hover:scale-105 transition duration-200 ease-in-out
          "
          onClick={handleButtonClick}
        >
          <Image
            src={`/flags/${selectedCountry.alpha2}.svg`}
            width={40}
            height={40}
            alt={selectedCountry.name}
            className="border border-gray-900 w-10 h-6"
          />
          {selectedCountry.name}
        </button>
        <div
          className={` ${!showPicker ? 'hidden' : 'block'}  absolute top-10 right-0  z-10 
         bg-white border border-gray-300 rounded-lg shadow-lg w-fit`}
        >
          <div className="flex flex-row items-center justify-between border-b-2 border-slate-200 ">
            {Object.keys(regionCountries)
              .sort()
              .map(region => (
                <button
                  key={region}
                  className={`${
                    currentRegion === region ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                  } md:px-12 px-6 py-2 m-0 transition duration-200 ease-in-out hover:bg-gray-300 font-medium text-base`}
                  onClick={() => setCurrentRegion(region)}
                >
                  {region === '' ? 'Others' : region}
                </button>
              ))}
          </div>

          <div className="grid md:grid-cols-4  auto-rows-max overflow-x-hidden  overflow-y-auto h-64 sm:grid-cols-2">
            {regionCountries[currentRegion].map(country => (
              <button
                key={country.name}
                className="flex flex-row items-center justify-start px-4 py-2 m-0 transition duration-200 ease-in-out hover:bg-gray-300 w-full"
                onClick={() => {
                  setSelectedCountry(country)
                  setShowPicker(false)
                }}
              >
                <Image
                  src={`/flags/${country.alpha2}.svg`}
                  width={32}
                  height={32}
                  alt={country.name}
                  className="mr-2 border border-gray-900"
                />
                <h1 className="px-2 truncate">{country.name}</h1>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
