const DrinkInteraction = ({DrinkAdd, setFood, setDrink, setActivity, setTime, FoodCalc, ActivityCalc, TimeCalc}) => {

  const DrinkLimit = () => {
    if (DrinkAdd < 0) {
      setDrink(0)
    } else if (DrinkAdd >= 100) {
      setDrink(100 - 6)
    }
    return DrinkAdd;
  }

  const FoodLimit = () => {
    if (FoodCalc < 0) {
      setFood(0)
    }
    return FoodCalc;
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
    setDrink(DrinkLimit); 
    setFood(FoodLimit);
    setActivity(ActivityLimit); 
  }

  return (
    <button className="button" onClick={Drink}>Coffee/Juicebox</button>
  )
}

export default DrinkInteraction;