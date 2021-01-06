import { useEffect, useState } from "react";
import Head from "next/head";
import { FaMoon, FaSearch } from "react-icons/fa";
import Countries from "../components/countries";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [option, setOption] = useState();

  // Get Data

  const getCountriesData = async () => {
    try {
      const request = await fetch(
        `https://restcountries.eu/rest/v2/name/${query}`
      );
      const data = await request.json();

      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch data on user input query

  useEffect(() => {
    getCountriesData();
  }, [query]);

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  // Filter Functions

  const updateOption = (e) => {
    setOption(e.target.value);
  };

  let filteredQuery = countries.filter(
    (country) => country.region === option
  );

  console.log(filteredQuery);

  //HTML

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Rest API search with theme switcher created with Next JS/React"
        />
      </Head>

      <header className="section header-section">
        <div className="container header-container">
          <h1>Where in the world?</h1>
          <button
            type="button"
            className="toggle-mode">
            <FaMoon className="toggle-icon" />
            Dark Mode
          </button>
        </div>
      </header>

      <main className="section main-section">
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
          <section className="section-grid">
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
          </section>
        </div>
      </main>
    </>
  );
}
