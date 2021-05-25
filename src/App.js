import "./App.css";
import React, { useEffect, useState } from "react";
import TimeInput from "react-time-picker-input";

function App() {
  const [dateEx1,setDateEx1]=useState('10:12')
  const [dateEx2,setDateEx2]=useState('10:12')
  const [dateEx3,setDateEx3]=useState('22:12')
  return (
   <div>
     <h3>12 hour format Time Input  : </h3>
     <TimeInput hour12Format value={dateEx1} onChange={(dateString)=>{setDateEx1(dateString)}}/>
      <span>
          <div className="code">
          <span>{`import React, { useEffect, useState } from "react";`}</span>  
          <span>{`import TimeInput from "react-time-picker-input";`}</span>  
          <span>{`function TimeInputEx(){`}</span>
          <span>{`     const [dateEx1,setDateEx1]=useState('10:12')`}</span>
          <span>{`     return <TimeInput value={dateEx1} onChange={(dateString)=>setDateEx1(dateString)}/>`}</span>
          <span>{`}`}</span>
         </div>
       </span>
      <h3>24 hour format Time Input : </h3>
     <TimeInput value={dateEx2} onChange={(dateString)=>console.log(dateString)}/>
        <span>
          <div className="code">
          <span>{`import React, { useEffect, useState } from "react";`}</span>  
          <span>{`import TimeInput from "react-time-picker-input";`}</span>  
          <span>{`function TimeInputEx(){`}</span>
          <span>{`     const [dateEx2,setDateEx2]=useState('10:12')`}</span>
          <span>{`     return <TimeInput hour12Format value={dateEx2} onChange={(dateString)=>setDateEx2(dateString)}/>`}</span>
          <span>{`}`}</span>
         </div>
       </span>
       <h3>Time Input allow delete : </h3>
     <TimeInput value={dateEx3} allowDelete onChange={(dateString)=>console.log(dateString)}/>
     <span>
          <div className="code">
          <span>{`import React, { useEffect, useState } from "react";`}</span>  
          <span>{`import TimeInput from "react-time-picker-input";`}</span>  
          <span>{`function TimeInputEx(){`}</span>
          <span>{`     const [dateEx3,setDateEx3]=useState('10:12')`}</span>
          <span>{`     return <TimeInput value={dateEx3} allowDelete onChange={(dateString)=>console.log(dateString)}/>`}</span>
          <span>{`}`}</span>
         </div>
       </span>
    </div>
  );
}

   
export default App;
