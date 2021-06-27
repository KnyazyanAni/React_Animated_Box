import "./Box.css";
import React, { useState } from 'react';

 function Box() {
   const [count, setCount] = useState(0);
   const [click, setClick] = useState(false);
   const [stopAnimation, setStopAnimation] = useState(false);
   const [pauseItem, setPauseItem] = useState(false);
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
            
   const move = (e) => {
     const box = e.target;
     setClick(click);
     setCount(count + 1);
     setStopAnimation(true);
     setPauseItem(false);
     box.style.backgroundColor = "#" + randomColor;
     e.stopPropagation();
   }
   const handelStopAnimation = (e) =>{
     setStopAnimation(false);
     console.log(stopAnimation)
    }
    const handelPauseItem = (e) =>{
    setPauseItem(true);
    }
  return (
   <div className={`box ${stopAnimation && "moveItem"} || ${!stopAnimation && "" } ||
           ${pauseItem && "pauseItem"}
           `} 
           onClick={move} onMouseOver={handelPauseItem }
           onAnimationEnd={handelStopAnimation}
   >
   <p id="count">{count}</p>
   </div>
  );
}
export default Box;