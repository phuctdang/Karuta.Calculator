const FoodInteraction = ({FoodAdd, setFood, setDrink, setActivity, setTime, DrinkCalc, ActivityCalc, TimeCalc}) => {

  const FoodLimit = () => {
    if (FoodAdd < 0) {
      setFood(0)
    } else if (FoodAdd >= 100) {
      setFood(100 - 4)
    }
    return FoodAdd;
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

  const Food = () => {
    setTime(TimeLimit); 
    setDrink(DrinkLimit); 
    setFood(FoodLimit);
    setActivity(ActivityLimit); 
  }

  return (
    <div className="buttonimg">
      <div id="foods">
        <img id="taco" className="img" src="../src/images/taco.png"/>
        <img id="pasta" className="img" src="../src/images/pasta.png"/>
      </div>
      <button className="button" onClick={Food}>Taco/Pasta</button>
    </div>
  )
}

export default FoodInteraction;