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

/**
 * The function fetches country data from an API and organizes it by region.
 * @returns The function `fetchCountries` returns a Promise that resolves to an object of type
 * `IRegion`.
 */
export async function fetchCountries(): Promise<IRegion> {
  const response = await fetch('https://retoolapi.dev/TkEl3I/countriesdata')
  const data = (await response.json()) as ICountryApiResponse[]
  /* Using the `reduce` method on the `data` array to organize the
 country data by region. */
  return data.reduce((acc, country) => {
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
}
