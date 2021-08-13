import React from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchvalue = React.useRef("");

  React.useEffect(() => {
    searchvalue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchvalue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <h3>Search for your favorite cocktail</h3>
          </label>
          <input
            type="text"
            id="name"
            ref={searchvalue}
            onChange={searchCocktail}
            autoComplete="off"
          />
        </div>
        <div className="categories">
          <h3>Select your type</h3>
          <div className="categories-container">
            <div className="types-container">
              <button className="btn-chip">Alcoholic</button>
              <button className="btn-chip">Non-Alcoholic</button>
            </div>
            <button className="btn-chip">Feeling Adventurous?</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
