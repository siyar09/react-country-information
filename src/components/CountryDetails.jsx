import { formatPopulation } from "../helpers/formatPopulation";

function CountryDetails({ country }) {
    return (
        <div className="country-info">
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={`Vlag van ${country.name.common}`} />
            <p>
                {country.name.common} is situated in {country.subregion} and the capital is {country.capital[0]}.
            </p>
            <p>
                It has a population of {formatPopulation(country.population)} million people and it borders with{" "}
                {country.borders ? country.borders.length : 0} neighboring countries.
            </p>
        </div>
    );
}

export default CountryDetails;
