const AirplaneInteraction = ({AirplaneAdd, setFood, setDrink, setActivity, setTime, FoodCalc, DrinkCalc, TimeCalc}) => {

  const AirplaneLimit = () => {
    if (AirplaneAdd < 0) {
      setActivity(0)
    }
    return AirplaneAdd;
  }

  const DrinkLimit = () => {
    if (DrinkCalc < 0) {
      setDrink(0)
    }
    return DrinkCalc;
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

  const Airplane = () => {
    setTime(TimeLimit); 
    setActivity(AirplaneLimit); 
    setDrink(DrinkLimit); 
    setFood(FoodLimit);
  }
  return (
    <button className="button" onClick={Airplane}>Airplane</button>
  )
}

export default AirplaneInteraction;