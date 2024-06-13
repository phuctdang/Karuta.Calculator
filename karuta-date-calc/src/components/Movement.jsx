const Movement = ({setGas, setFood, setDrink, setActivity, setTime, GasCalc, FoodCalc, DrinkCalc, ActivityCalc, TimeCalc}) => {

  const GasLimit = () => {
    if (GasCalc < 0) {
      setGas(0)
    }
    return GasCalc;
  }

  const FoodLimit = () => {
    if (FoodCalc < 0) {
      setFood(0)
    }
    return FoodCalc;
  }

  const DrinkLimit = () => {
    if (DrinkCalc < 0) {
      setDrink(0)
    }
    return DrinkCalc;
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

  const Move = () => {
    setGas(GasLimit);
    setFood(FoodLimit);
    setDrink(DrinkLimit); 
    setActivity(ActivityLimit); 
    setTime(TimeLimit);
  }

  return (
    <button id="move" onClick={Move}>MOVE</button>
  )
}

export default Movement;