import { ICountry } from '@/apis/fetchCountries'
import { create } from 'zustand'

interface Store {
  selectedCountry: ICountry
  setSelectedCountry: (country: ICountry) => void
}

export const useCountryStore = create<Store>(set => ({
  selectedCountry: {
    name: 'Germany',
    region: 'Europe',
    alpha2: 'DE',
  },
  setSelectedCountry: country => set(() => ({ selectedCountry: country })),
}))
