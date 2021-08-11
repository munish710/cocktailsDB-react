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
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <h4>Search for your favorite cocktail</h4>
          </label>
          <input
            type="text"
            id="name"
            ref={searchvalue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
