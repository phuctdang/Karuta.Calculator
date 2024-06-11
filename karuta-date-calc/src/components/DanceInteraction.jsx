const DanceInteraction = ({DanceAdd, DanceFoodAdd, DanceDrinkAdd, setFood, setDrink, setActivity, setTime, TimeCalc}) => {

  const DanceLimit = () => {
    if (DanceAdd < 0) {
      setActivity(0)
    } else if (DanceAdd >= 100) {
      setActivity(100 - 8)
    }
    return DanceAdd;
  }

  const DanceFoodLimit = () => {
    if (DanceFoodAdd < 0) {
      setFood(0)
    } else if (DanceFoodAdd >= 100) {
      setFood(100 - 4)
    }
    return DanceFoodAdd;
  }

  const DanceDrinkLimit = () => {
    if (DanceDrinkAdd < 0) {
      setDrink(0)
    } else if (DanceDrinkAdd >= 100) {
      setDrink(100 - 6)
    }
    return DanceDrinkAdd;
  }

  const TimeLimit = () => {
    if (TimeCalc < 0) {
      setTime(0)
    }
    return TimeCalc;
  }

  const Drink = () => {
    setTime(TimeLimit); 
    setFood(DanceFoodLimit);
    setDrink(DanceDrinkLimit); 
    setActivity(DanceLimit); 
  }

  return (
    <button className="button" onClick={Drink}>Dance</button>
  )
}

export default DanceInteraction;