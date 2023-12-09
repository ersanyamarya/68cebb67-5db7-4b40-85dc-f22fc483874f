'use client'
import { IRegion } from '@/apis/fetchCountries'
import Image from 'next/image'
import { useState } from 'react'
interface CountryPickerProps {
  regionCountries: IRegion
}

export default function CountryPicker({ regionCountries }: CountryPickerProps) {
  const [currentRegion, setCurrentRegion] = useState('Asia')
  const [showPicker, setShowPicker] = useState(false)
  const handleButtonClick = () => {
    setShowPicker(!showPicker)
  }
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
        Button
      </button>
      <div
        className={`${!showPicker ? 'invisible' : 'visible'} absolute bg-transparent z-10 h-full w-full top-0 left-0 
        flex flex-row items-center justify-center
        `}
        // onClick={handleButtonClick}
      >
        <div className={` bg-white border border-gray-300 rounded-lg shadow-lg w-3/4`}>
          <div className="flex flex-row items-center justify-between border-b-2 border-slate-200 ">
            {Object.keys(regionCountries).map(region => (
              <button
                key={region}
                className={`${
                  currentRegion === region ? 'border-b-2 border-black' : 'border-b-2 border-transparent'
                } px-4 py-2 m-0 transition duration-200 ease-in-out hover:bg-gray-300 font-medium text-base`}
                onClick={() => setCurrentRegion(region)}
              >
                {region === '' ? 'Others' : region}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4  auto-rows-max overflow-x-hidden  overflow-y-auto h-64 ">
            {regionCountries[currentRegion].map(country => (
              <button
                key={country.name}
                className="flex flex-row items-center justify-start px-4 py-2 m-0 transition duration-200 ease-in-out hover:bg-gray-300 h-12"
              >
                <Image src={`/flags/${country.alpha2}.svg`} width={24} height={24} alt={country.name} />
                <h1 className="px-2 truncate">{country.name}</h1>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
