import { getRegionColor } from "../helpers/getRegioncolor";

function CountryCard({ country }) {
    return (
        <div className="country">
            <h2 style={{ color: getRegionColor(country.region) }}>
                {country.name.common}
            </h2>
            <img src={country.flags.png} alt={`Vlag van ${country.name.common}`} />
            <p>Has a population of {country.population.toLocaleString()} people</p>
        </div>
    );
}

export default CountryCard;
