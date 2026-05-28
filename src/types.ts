export interface ApiCountry{
    name: string;
    alpha3Code: string;
}

export interface ApiCountryDetails{
    name: string;
    alpha3Code: string;
    capital?: string;
    population: number;
    region: string;
    flag: string;
    borders?:string[];
}