const CocktailInteraction = ({CocktailDrinkAdd, CocktailActivityAdd, setFood, setDrink, setActivity, setTime, FoodCalc, DrinkCalc, ActivityCalc, TimeCalc}) => {

  const CocktailDrinkLimit = () => {
    if (CocktailDrinkAdd < 0) {
      setDrink(0)
    } else if (CocktailDrinkAdd >= 100) {
      setDrink(100 - 6)
    }
    return CocktailDrinkAdd;
  }

  const CocktailActivityLimit = () => {
    if (CocktailActivityAdd < 0) {
      setActivity(0)
    } else if (CocktailActivityAdd >= 100) {
      setActivity(100 - 8)
    }
    return CocktailActivityAdd;
  }

  const FoodLimit = () => {
    if (FoodCalc < 0) {
      setFood(0)
    }
    return FoodCalc;
  }

  const TimeLimit = () => {
    if (TimeCalc < 0) {
      setTime(0)
    }
    return TimeCalc;
  }

  const Drink = () => {
    setTime(TimeLimit); 
    setDrink(CocktailDrinkLimit); 
    setActivity(CocktailActivityLimit); 
    setFood(FoodLimit);
  }

  return (
    <button className="button" onClick={Drink}>Cocktail</button>
  )
}

export default CocktailInteraction;