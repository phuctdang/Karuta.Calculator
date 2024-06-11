const FerrisWheelInteraction = ({FerrisWheelAdd, FWFoodAdd, FWDrinkAdd, setFood, setDrink, setActivity, setTime, TimeCalc}) => {

  const FerrisWheelLimit = () => {
    if (FerrisWheelAdd < 0) {
      setActivity(0)
    } else if (FerrisWheelAdd >= 100) {
      setActivity(100 - 8)
    }
    return FerrisWheelAdd;
  }

  const FWFoodLimit = () => {
    if (FWFoodAdd < 0) {
      setFood(0)
    } else if (FWFoodAdd >= 100) {
      setFood(100 - 4)
    }
    return FWFoodAdd;
  }

  const FWDrinkLimit = () => {
    if (FWDrinkAdd < 0) {
      setDrink(0)
    } else if (FWDrinkAdd >= 100) {
      setDrink(100 - 6)
    }
    return FWDrinkAdd;
  }

  const TimeLimit = () => {
    if (TimeCalc < 0) {
      setTime(0)
    }
    return TimeCalc;
  }

  const Drink = () => {
    setTime(TimeLimit); 
    setActivity(FerrisWheelLimit); 
    setFood(FWFoodLimit);
    setDrink(FWDrinkLimit); 
  }

  return (
    <div className="buttonimg">
      <img className="img" src="../src/images/ferriswheel.png"/>
      <button className="button" onClick={Drink}>Ferris Wheel</button>
    </div>
  )
}

export default FerrisWheelInteraction;