export interface ICountryApiResponse {
  id: number
  name: string
  region: string
  'alpha-2': string
  'alpha-3': string
  'iso_3166-2': string
  'sub-region': string
  'region-code': string
  'country-code': string
  'sub-region-code': string
  'intermediate-region': string
  'intermediate-region-code': string
}

export interface ICountry {
  name: string
  region: string
  alpha2: string
}

export interface IRegion {
  [key: string]: ICountry[]
}

export async function fetchCountries(): Promise<IRegion> {
  const response = await fetch('https://retoolapi.dev/TkEl3I/countriesdata')
  const data = (await response.json()) as ICountryApiResponse[]
  return sortJsonByKeys(
    data.reduce((acc, country) => {
      const region = country.region
      if (!acc[region]) {
        acc[region] = []
      }
      acc[region].push({
        name: country.name,
        region: country.region,
        alpha2: country['alpha-2'],
      })
      return acc
    }, {} as IRegion)
  )
}

function sortJsonByKeys(obj: any) {
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {} as any)
}
