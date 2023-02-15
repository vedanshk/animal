import { useState } from "react";
import bird from "./svg/bird.svg";

import cat from "./svg/cat.svg";

import cow from "./svg/cow.svg";

import dog from "./svg/dog.svg";

import heart from "./svg/heart.svg";

import horse from "./svg/horse.svg";

import gator from "./svg/gator.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  heart,
  horse,
  gator,
};
function AnimalShow({ type }) {
  const [likes, setLikes] = useState(0);
 
  const handleClick = () => {
    setLikes(likes +1);
    console.log(likes)
  };

  return (
    <div className="animal" onClick={handleClick} >
      <img src={svgMap[type]} alt="" className="animal_img"/>

      <img alt="" src={heart} style={{ width: 10 + (10 * likes) + 'px' }} />
    </div>
  );
}

export default AnimalShow;
