import React from "react";
import {useState , createContext } from 'react';
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null);

function Calculator(){
    const [theme,setTheme] = useState("light")
    const toggleTheme = () =>{
    setTheme((curr)=>(curr==="light"?"dark" : "light"));
    }

    const [calc,setCalc] = useState("");
    const [result,setResult] = useState("");
    const ops = ["/" , "*" , "+" , "-" , "."];

    const updateCalc = value => {
    if(
        ops.includes(value) && calc === "" || 
        ops.includes(value) && ops.includes(calc.slice(-1))
    ){
        return;
      }
    
    setCalc(calc + value);
    if(!ops.includes(value)){
        setResult(eval(calc+value))
    }
    }
const calculate = () => {
    setCalc(eval(calc));
    setResult("");
    }

const delate =() =>{
    if(calc===""){
    return;
}
const value = calc.slice(0,-1);
    setCalc(value);
}
const reset = () =>{
    setCalc("");
    setResult("");
    result("0")

}

return(
    <ThemeContext.Provider value={{ theme , toggleTheme}}>
    <div className="calculator">
        <div className="top">
        <div className="logo">
        <h3>Calc</h3>
        </div>
        <div className="theme-box">
        <p>Theme</p>
        <div className="theme-container">
        <div className="theme-btn">
            <p>Dark</p>
            <p>Light</p>
        </div>
            <div className="switcher">
        <ReactSwitch onChange={toggleTheme} checked={theme==="light"}/>
                </div>
            </div>
        </div>
    </div>
    <div className="display" id={theme}>
        {result ? <span>({result})</span> : ""} 
        {calc || 0}
    </div>
    <div className="buttons-body" id={theme}>
        <button onClick={()=>updateCalc("7")} id={theme}>7</button>
        <button onClick={()=>updateCalc("8")} id={theme}>8</button>
        <button onClick={()=>updateCalc("9")} id={theme}>9</button>
        <button className="del" onClick={delate} id={theme}>DEL</button>
        <button onClick={()=>updateCalc("4")} id={theme}>4</button>
        <button onClick={()=>updateCalc("5")} id={theme}>5</button>
        <button onClick={()=>updateCalc("6")} id={theme}>6</button>
        <button onClick={()=>updateCalc("+")} id={theme}>+</button>
        <button onClick={()=>updateCalc("1")} id={theme}>1</button>
        <button onClick={()=>updateCalc("2")} id={theme}>2</button>
        <button onClick={()=>updateCalc("3")} id={theme}>3</button>
        <button onClick={()=>updateCalc("-")} id={theme}>-</button>
        <button onClick={()=>updateCalc(".")} id={theme}>.</button>
        <button onClick={()=>updateCalc("0")} id={theme}>0</button>
        <button onClick={()=>updateCalc("/")} id={theme}>/</button>
        <button onClick={()=>updateCalc("*")} id={theme}>*</button>
    <div className="bottom">
            <button id={theme} className="del" onClick={reset}>Reset</button>
            <button id={theme} className="equal"  onClick={calculate} >=</button>
      </div>
      
      </div>
     </div>
     </ThemeContext.Provider>

)
}
export default Calculator;