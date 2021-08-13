import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Cocktail to Display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section page">
      <div className="cocktail-section-center">
        <div className="cocktail-section-header">
          <h2>{name}</h2>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
        </div>

        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <div className="drink-data-item">
              <div className="drink-data">
                <span className="drink-data-title">Name:</span>
              </div>
              <p>{name}</p>
            </div>
            <div className="drink-data-item">
              <div className="drink-data">
                <span className="drink-data-title">Category:</span>
              </div>
              <p> {category} </p>
            </div>

            <div className="drink-data-item">
              <div className="drink-data">
                <span className="drink-data-title">Glass:</span>
              </div>
              <p>{glass}</p>
            </div>
            <div className="drink-data-item">
              <div className="drink-data">
                <span className="drink-data-title">Instructions:</span>
              </div>
              <p>{instructions}</p>
            </div>
            <div className="drink-data-item">
              <div className="drink-data">
                <span className="drink-data-title">Type:</span>
              </div>
              <p>{info}</p>
            </div>
            <div className="drink-data-item">
              <div className="drink-data">
                <span className="drink-data-title">Ingredients:</span>
              </div>
              <p>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}>{item},</span> : null;
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
