const DatingCalc = () => {

  let Gas = 100;
  let Food = 50;
  let Drink = 50;
  let Activity = 75;
  let Time = 100;

  return (
    <section>
      <section id="starting">
        <div>Gas = {Gas}</div>
        <div>Food = {Food}</div>
        <div>Drink = {Drink}</div>
        <div>Activity = {Activity}</div>
        <div>Time = {Time}</div>
      </section>

      <section id="interact">
        <button className="button">Interact Gas</button>
        <button className="button">Interact Tacos</button>
        <button className="button">Interact Pasta</button>
        <button className="button">Interact Coffee</button>
        <button className="button">Interact Juicebox</button>
        <button className="button">Interact Sandwich</button>
        <button className="button">Interact Masks</button>
        <button className="button">Interact Flower</button>
        <button className="button">Interact Dance</button>
        <button className="button">Interact Cocktail</button>
        <button className="button">Interact Ferris Wheel</button>
        <button className="button">Interact Airplane</button>
        <button className="button">Interact Ring</button>
        <button className="button">Interact Shopping Bags</button>
      </section>

      <button id="move">MOVE</button>
    </section>
  )
};

export default DatingCalc;