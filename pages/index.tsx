import Head from "next/head";
import { FaMoon, FaSearch } from "react-icons/fa";

export default function Home() {
  const getCountries = async () => {
    const request = await fetch(
      "https://restcountries.eu/rest/v2/all"
    );
    const data = await request.json();

    console.log(data);
  };
  getCountries();

  const searchQuery = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log(
        "congrats youve searched a query"
      );
    }
  };

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
          <form
            action=""
            method="get"
            className="search-box">
            <input
              type="search"
              onKeyUp={searchQuery}
              placeholder="Search for a country..."
            />
            <select
              name="country-filter"
              className="country-filter">
              <option
                value="disabled"
                disabled
                selected>
                Filter by Region
              </option>
              <option value="country">
                Africa
              </option>
              <option value="country">
                America
              </option>
              <option value="country">
                Asia
              </option>
              <option value="country">
                Europe
              </option>
              <option value="country">
                Oceania
              </option>
            </select>
          </form>

          <section className="section-grid">
            <article className="grid-col"></article>
          </section>
        </div>
      </main>
    </>
  );
}
