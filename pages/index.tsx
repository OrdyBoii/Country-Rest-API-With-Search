import { useEffect, useState } from "react";
import Head from "next/head";
import Countries from "../components/Countries";
import Header from "../components/Header";
import {
  lightTheme,
  darkTheme,
} from "../components/Theme";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [option, setOption] = useState();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getCountriesData = async () => {
    try {
      const request = await fetch(
        `https://restcountries.eu/rest/v2/name/${query}`
      );
      const data = await request.json();

      setCountries(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountriesData();
    changePopulationWithCommas();
  }, [query]);

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const updateOption = (e) => {
    setOption(e.target.value);
  };

  let filteredQuery = countries.filter(
    (country) => country.region === option
  );

  const changePopulationWithCommas = () => {
    countries.forEach((country) =>
      country.population
        .toString()
        .replace(/(.)(?=(\d{3})+$)/g, "$1,")
    );
  };

  console.log(filteredQuery);

  return (
    <main>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Rest API search with theme switcher created with Next JS/React"
        />
      </Head>
      <Header />

      <section className="section main-section">
        <div className="container">
          <div className="search-box">
            <input
              type="search"
              placeholder="Search for a country..."
              value={query}
              onChange={updateQuery}
            />
            <select
              name="country-filter"
              className="country-filter"
              defaultValue="default"
              value={option}
              onChange={updateOption}>
              <option disabled value="default">
                Filter by Region
              </option>
              <option value="Africa">
                Africa
              </option>
              <option value="America">
                America
              </option>
              <option value="Asia">Asia</option>
              <option value="Europe">
                Europe
              </option>
              <option value="Oceania">
                Oceania
              </option>
            </select>
          </div>
          <div className="section-grid">
            {countries.map((country) => (
              <Countries
                url={country.name}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                key={country.name}
              />
            ))}
            {filteredQuery.map((country) => (
              <Countries
                url={country.name}
                flag={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                key={country.name}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
