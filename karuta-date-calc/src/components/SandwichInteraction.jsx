const SandwichInteraction = ({SandwichFoodAdd, SandwichDrinkAdd, setFood, setDrink, setActivity, setTime, FoodCalc, DrinkCalc, ActivityCalc, TimeCalc}) => {

  const SandwichFoodLimit = () => {
    if (SandwichFoodAdd < 0) {
      setFood(0)
    } else if (SandwichFoodAdd >= 100) {
      setFood(100-4)
    }
    return SandwichFoodAdd - 4;
  }

  const SandwichDrinkLimit = () => {
    if (SandwichDrinkAdd < 0) {
      setDrink(0)
    } else if (SandwichDrinkAdd >= 100) {
      setDrink(100 - 6)
    }
    return SandwichDrinkAdd - 6;
  }

  const ActivityLimit = () => {
    if (ActivityCalc < 0) {
      setActivity(0)
    }
    return ActivityCalc;
  }

  const TimeLimit = () => {
    if (TimeCalc < 0) {
      setTime(0)
    }
    return TimeCalc;
  }

  const Drink = () => {
    setTime(TimeLimit); 
    setFood(SandwichFoodLimit);
    setDrink(SandwichDrinkLimit); 
    setActivity(ActivityLimit); 
  }

  return (
    <div className="buttonimg">
      <img className="img" src="../src/images/sandwich.png"/>
      <button className="button" onClick={Drink}>Sandwich</button>
    </div>
  )
}

export default SandwichInteraction;