import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [Value,setValue] = useState();
   
    function displayValue(e){
        const clickedvalue = e.target.value;
        setValue (Value+clickedvalue);
    }  
 return (
    <div className='Calculator-body'>
  
    <div className='Calculator-Top'>
    <h1>Calcu<span>lator</span></h1>
    </div>

    <form>
    <div className='Input-clss'>
    <input  defaultValue={Value}  type='text' >
    </input>
     </div>
    </form>

    <form className='Input-btn'>
        <div>
            <input type='button' value="AC" onClick={e => setValue("")}/>
            <input type='button' value="DEL" onClick={e => setValue(Value.slice(0,-1) )}/>
            <input type='button' value="." onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="/" onClick={e => setValue(Value + e.target.value )}/>
        </div>
        
        
        <div>
        {/*there is tow methods i know to update the function so i have used two different methods*/}
         
            <input type='button' value="7" onClick={displayValue}/>
            <input type='button' value="8" onClick={displayValue}/>
            <input type='button' value="9" onClick={displayValue}/>
            <input type='button' value="*" onClick={displayValue}/>
         </div>
         {/*there is tow methods i know to update the function so i have used two different methods*/}



        <div>
            <input type='button' value="6" onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="5" onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="4" onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="+" onClick={e => setValue(Value + e.target.value )}/>
        </div>
        <div>
            <input  type='button' value= {1} onClick={event => setValue(Value + event.target.value)}/>
            <input type='button' value= {2}  onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="3" onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="-" onClick={e => setValue(Value + e.target.value )}/>
        </div>
        <div >
            <input type='button' value="00"  onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="0"   onClick={e => setValue(Value + e.target.value )}/>
            <input type='button' value="="   onClick={e => setValue(eval(Value) )} className='Equal'/>
        </div>
    </form>
      
    </div>
  )
}

export default Calculator
