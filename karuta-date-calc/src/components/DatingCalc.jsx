import { useState } from 'react';
import Movement from './Movement';
import Accessories from './Accessories';
import GasInteraction from './GasInteraction';
import FoodInteraction from './FoodInteraction';
import DrinkInteraction from './DrinkInteraction';
import MasksInteraction from './MasksInteraction';
import FlowerInteraction from './FlowerInteraction';
import AirplaneInteraction from './AirplaneInteraction';
import SandwichInteraction from './SandwichInteraction';
import CocktailInteraction from './CocktailInteraction';
import DanceInteraction from './DanceInteraction';
import FerrisWheelInteraction from './FerrisWheelInteraction';
import WinLose from './WinLose';

const DatingCalc = () => {
  const [gas, setGas] = useState(100);
  const [food, setFood] = useState(50);
  const [drink, setDrink] = useState(50);
  const [activity, setActivity] = useState(75);
  const [time, setTime] = useState(100);

  let GasCalc = gas - 10;
  let FoodCalc = food - 4;
  let DrinkCalc = drink - 6;
  let ActivityCalc = activity - 8;
  let TimeCalc = time - 4;
  let GasAdd = gas + 100;
  let FoodAdd = food + 60;
  let DrinkAdd = drink + 60;
  let MasksAdd = activity + 60;
  let FlowerAdd = activity + 100;
  let AirplaneAdd = ActivityCalc - 10;
  let SandwichFoodAdd = food + 40;
  let SandwichDrinkAdd = drink + 20;
  let CocktailDrinkAdd = drink + 40;
  let CocktailActivityAdd = activity + 40;
  let DanceAdd = FlowerAdd;
  let DanceFoodAdd = food - 10;
  let DanceDrinkAdd = drink - 15;
  let FerrisWheelAdd = activity + 40;
  let FWFoodAdd = food + 20;
  let FWDrinkAdd = drink + 20;

  const refresh = () => {
    window.location.reload()
  }

  return (
    <section>
      <section id="starting">
        <div>Gas = {gas}</div>
        <div>Food = {food}</div>
        <div>Drink = {drink}</div>
        <div>Activity = {activity}</div>
        <div>Time = {time}</div>
      </section>

      <section id="interact">
        <GasInteraction setGas={setGas} GasAdd={GasAdd} setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} />

        <FoodInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} FoodAdd={FoodAdd} />

        <DrinkInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} DrinkAdd={DrinkAdd} />

        <SandwichInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} SandwichFoodAdd={SandwichFoodAdd} SandwichDrinkAdd={SandwichDrinkAdd} />

        <CocktailInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} CocktailDrinkAdd={CocktailDrinkAdd} CocktailActivityAdd={CocktailActivityAdd} />

        <MasksInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} MasksAdd={MasksAdd} />

        <FlowerInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} FlowerAdd={FlowerAdd} />

        <DanceInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} TimeCalc={TimeCalc} DanceAdd={DanceAdd} DanceFoodAdd={DanceFoodAdd} DanceDrinkAdd={DanceDrinkAdd} />

        <FerrisWheelInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} TimeCalc={TimeCalc} FerrisWheelAdd={FerrisWheelAdd} FWFoodAdd={FWFoodAdd} FWDrinkAdd={FWDrinkAdd} />

        <AirplaneInteraction setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} AirplaneAdd={AirplaneAdd}/>

        <Accessories setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} />
      </section>

      <Movement setGas={setGas} setFood={setFood} setDrink={setDrink} setActivity={setActivity} setTime={setTime} GasCalc={GasCalc} FoodCalc={FoodCalc} DrinkCalc={DrinkCalc} ActivityCalc={ActivityCalc} TimeCalc={TimeCalc} />

      <button id="restart" onClick={refresh}>Restart</button>

      <WinLose gas={gas} food={food} drink={drink} activity={activity} time={time} />
      
    </section>
  )
};

export default DatingCalc;