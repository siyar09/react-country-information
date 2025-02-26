import { useState } from "react";
import axios from "axios";
import "./App.css";
import worldmap from "./assets/world_map.png";
import CountryCard from "./components/CountryCard";
import CountryDetails from "./components/CountryDetails";
import { getRegionColor } from "./helpers/getRegioncolor";
import { formatPopulation } from "./helpers/formatPopulation";

function App() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState("");

    // Functie om alle landen op te halen
    function getCountries() {
        axios.get("https://restcountries.com/v3.1/all")
            .then(response => {
                const sortedCountries = response.data.sort((a, b) => a.population - b.population);
                setCountries(sortedCountries);
            })
            .catch(error => {
                console.error("Fout bij het ophalen van landen:", error);
            });
    }

    // Functie om een specifiek land op te halen
    async function fetchCountryData() {
        if (!searchInput) return;

        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${searchInput}?fullText=true`);
            const countryData = response.data[0];

            setCountry(countryData);
            setError("");
            setSearchInput("");
        } catch (err) {
            setError(`${searchInput} bestaat niet. Probeer het opnieuw.`);
            setCountry(null);
        }
    }

    return (
        <div className="container">
            <img src={worldmap} alt="Wereldkaart" />
            <h1>World Regions</h1>
            <button className="button1" onClick={getCountries}>Get Countries</button>
            <div className="search-box">
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && fetchCountryData()}
                    placeholder="Zoek een land..."
                />
                <button onClick={fetchCountryData}>Zoek</button>
            </div>

            {error && <p className="error">{error}</p>}

            {country && <CountryDetails country={country} />}

            {countries.length > 0 && (
                <div className="countries-container">
                    {countries.map((country, index) => (
                        <CountryCard key={index} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
