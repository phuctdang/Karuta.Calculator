const Accessories = ({setFood, setDrink, setActivity, setTime, FoodCalc, DrinkCalc, ActivityCalc, TimeCalc}) => {

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

  const Resource = () => {
    setTime(TimeLimit); 
    setFood(FoodLimit);
    setDrink(DrinkLimit); 
    setActivity(ActivityLimit); 
  }

  return (
    <>
      <div className="buttonimg">
        <img className="img" src="../src/images/ring.png"/>
        <button className="button" onClick={Resource}>Ring</button>
      </div>
      <div className="buttonimg">
        <img className="img" src="../src/images/shoppingbags.png"/>
        <button className="button" onClick={Resource}>Shopping Bags</button>
      </div>
    </>
  )
}

export default Accessories;