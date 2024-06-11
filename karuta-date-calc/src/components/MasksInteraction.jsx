const MasksInteraction = ({MasksAdd, setFood, setDrink, setActivity, setTime, FoodCalc, DrinkCalc, TimeCalc}) => {

  const MasksLimit = () => {
    if (MasksAdd < 0) {
      setActivity(0)
    } else if (MasksAdd >= 100) {
      setActivity(100 - 8)
    }
    return MasksAdd;
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

  const Masks = () => {
    setActivity(MasksLimit); 
    setDrink(DrinkLimit); 
    setFood(FoodLimit);
    setTime(TimeLimit); 
  }
  return (
    <button className="button" onClick={Masks}>Masks</button>
  )
}

export default MasksInteraction;