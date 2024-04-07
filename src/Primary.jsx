import React from "react";

function Primary()
{
const [counter, setCounter]= React.useState(0);

const [isLoggedIn, setIsLoggedIn]=React.useState(false);
const hiddenMsg="This is hidden MESSAGE "
function decrement()
{
    setCounter(counter-1)
    // setCounter(function(prev){
    //     return(prev-1);
    // }) 
}
function increment()
{
    setCounter(counter+1)
    // setCounter(function(incre){
    //     return(incre+1);
    // })
    
} 
function reset()
{
    setCounter(0); 
}
function msg()
{
    setIsLoggedIn(!isLoggedIn) 
    // setIsLoggedIn(function(prev){
    //     if(prev==true)
    //     return false;
    //     else
    //     return true;
    // })
}


return (
   
    <div >
      <div className="counter-display">
        {counter}
      </div>
      <div>
        <button className="button decrement-button" onClick={decrement}>-</button>
        <button className="button reset-button" onClick={reset}>RESET</button>
        <button className="button increment-button" onClick={increment}>+</button>
      </div>
      <div className="login-section">
        <div className={isLoggedIn ? "hidden-message show" : "hidden-message"}>
          {<h2>{hiddenMsg}</h2>}
        </div>
        <button className="button login-button" onClick={msg}>LOGIN</button>
      </div>
    </div>
    
  );
}
export default Primary;