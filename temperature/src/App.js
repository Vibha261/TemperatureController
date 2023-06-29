import React, {useState} from 'react';

const App = () => {
  const [tempVal, setTempVal] =useState(10);
  const [tempColor, setTempColor] = useState('neutral');

  const increase = ()=>{
    if(tempVal === 30) return;
    const newTemp = tempVal+1;
    if((newTemp>=10) && (newTemp<=20)){
      setTempColor('neutral');
    }
    else if(newTemp > 20){
      setTempColor('hot');
    }
    setTempVal(newTemp);
  }

  const decrease = ()=>{
    if(tempVal === 0) return;
    const newTemp = tempVal-1;
    if((newTemp>=10) && (newTemp<=20)){
      setTempColor('neutral');
    }
    else if(newTemp < 10){
      setTempColor('cold');
    }
    setTempVal(newTemp);
  }
  return(
      <div className={tempColor}>
      <h1>Temperature Controller</h1><br/>
      <div className='content-body'>
      <div className='container'>
      <div className='display-container'>
        <div className='temperature-display'>
          {tempVal}°C</div>
      </div>
      <div className='controller-container'>
        <button onClick={()=> increase()}>+</button>
        <button onClick={()=> decrease()}>-</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default  App;