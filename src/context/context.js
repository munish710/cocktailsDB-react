import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const filterUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=";
const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const history = useHistory();

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  const fetchFilterDrinks = async (category = "Alcoholic") => {
    setLoading(true);
    try {
      const response = await fetch(`${filterUrl}${category}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: category,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchRandomDrink = async () => {
    try {
      const response = await fetch(`${randomUrl}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const { idDrink } = drinks[0];
        history.push(`/cocktail/${idDrink}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        cocktails,
        fetchFilterDrinks,
        fetchRandomDrink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
