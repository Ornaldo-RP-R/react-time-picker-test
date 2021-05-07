import "./App.css";
import React, { useEffect, useState } from "react";
import TimeInput from "react-time-picker-input"
function App(props) {
  const [date,setDate]=useState('10:12')

  return (
   <div>
     <TimeInput hour12Format value={date} onChange={(dateString)=>{
     }}/>
    </div>
  );
}

   
export default App;
