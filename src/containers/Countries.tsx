import React,{useState,useEffect,useCallback} from 'react';
import axios from 'axios';
import { ApiCountry } from '../../types';
import CountryCard from '../components/CountryCard';
import FullCountry from '../components/FullCountry';

const BASE_URL = 'https://restcountries.com/v2/';
const ALL_COUNTRIES_URL = 'all?fields=alpha3Code,name';

const Countries:React.FC = () =>{
    const [countries, setCountries] = useState<ApiCountry[]>([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);

    const fetchCountries = useCallback(async () => {
        try {
            const response = await axios.get<ApiCountry[]>(BASE_URL + ALL_COUNTRIES_URL);
            setCountries(response.data);
        } catch (error) {
            console.error(error);
        }
    },[]);

    useEffect(() => {
    fetchCountries().catch(console.error);
    },[fetchCountries]);

    return (
        <div className="countries-container">
            <aside className="sidebar">
                <ul className="country-list">
                    {countries.map((country) => (
                        <CountryCard
                            key={country.alpha3Code}
                            name={country.name}
                            onClick={() => setSelectedCountryCode(country.alpha3Code)}
                        />
                    ))}
                </ul>
            </aside>

            <section className="main-content">
                <FullCountry id={selectedCountryCode} />
            </section>
        </div>
    );
};

export default Countries;





