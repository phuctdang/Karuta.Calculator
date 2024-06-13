const FlowerInteraction = ({FlowerAdd, setFood, setDrink, setActivity, setTime, FoodCalc, DrinkCalc, TimeCalc}) => {

  const FlowerLimit = () => {
    if (FlowerAdd < 0) {
      setActivity(0)
    } else if (FlowerAdd >= 100) {
      setActivity(100 - 8)
    }
    return FlowerAdd - 8;
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

  const Flower = () => {
    setTime(TimeLimit); 
    setActivity(FlowerLimit); 
    setDrink(DrinkLimit); 
    setFood(FoodLimit);
  }
  return (
    <div className="buttonimg">
      <img className="img" src="../src/images/flower.png"/>
      <button className="button" onClick={Flower}>Flower</button>
    </div>
  )
}

export default FlowerInteraction;