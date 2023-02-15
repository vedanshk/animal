import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal(){

    const animals = ['bird' , 'cow'  , 'dog' , 'horse' , 'cat'];
    return animals[Math.floor(Math.random()*animals.length)]
}
function App() {
  const [animals, setAnimals] = useState([]);


  const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
   
  };

  const currentAnimals = animals.map((type, i) => (
    <AnimalShow key={i} type={type} />
  ));

  return (
    <div className="parent">
      <button onClick={handleClick}>Add animal </button>

      <div className="container">{currentAnimals}</div>
    </div>
  );
}

export default App;
