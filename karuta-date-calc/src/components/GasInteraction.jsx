const GasInteraction = ({setGas, GasAdd, setFood, setDrink, setActivity, setTime, FoodCalc, DrinkCalc, ActivityCalc, TimeCalc}) => {

  const GasAddLimit = () => {
    if (GasAdd >= 100) {
      setGas(100)
    }
    return GasAdd;
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

  const Gas = () => {
    setTime(TimeLimit); 
    setGas(GasAddLimit);
    setFood(FoodLimit);
    setDrink(DrinkLimit); 
    setActivity(ActivityLimit); 
  }

  return (
    <div className="buttonimg">
      <img className="img" src="../src/images/gas.png"/>
      <button className="button" onClick={Gas}>Gas</button>
    </div>
  )
}

export default GasInteraction;