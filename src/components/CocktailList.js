import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { getByTitle } from "@testing-library/react";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">No cocktails matched your search term</h2>
    );
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
};

export default CocktailList;
