import Link from "next/link";
import { lightTheme, darkTheme } from "./Theme";

const Countries = ({
  flag,
  name,
  population,
  region,
  capital,
  url,
}) => {
  return (
    <article className="grid-col">
      <img src={flag} alt={name} />
      <div className="country-content">
        <h1>{name}</h1>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </article>
  );
};

export default Countries;
