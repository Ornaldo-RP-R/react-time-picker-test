import "./App.css";
import React, { useEffect, useState } from "react";
import TimeInput from "./components/TimeInput";

function App() {
  const [dateEx1, setDateEx1] = useState("11:12");
  const [dateEx2, setDateEx2] = useState("10:27");
  const [dateEx3, setDateEx3] = useState("03:15");
  const [dateEx4, setDateEx4] = useState("22:44");
  const [dateEx5, setDateEx5] = useState("07:33");
  const [dateEx6, setDateEx6] = useState("14:50");

  return (
    <div>
       <Example
        title="12 hour format Time Input  With Dropdown :"
        timeInputProps={{
          hour12Format: true,
          shouldDisplayDropdown: true,
          value: dateEx3,
          onChange: (dateString) => {
            setDateEx3(dateString);
          },
        }}
        stateString="const [dateEx3,setDateEx3]=useState('10:12')"
        timeInputPropsString="value={dateEx3} hour12Format shouldDisplayDropdown onChange={(dateString)=>setDateEx3(dateString)}"
      />
      <Example
        title="24 hour format Time Input With Dropdown :"
        timeInputProps={{
          value: dateEx4,
          shouldDisplayDropdown: true,
          onChange: (dateString) => {
            setDateEx4(dateString);
          },
        }}
        stateString="const [dateEx4,setDateEx4]=useState('10:12')"
        timeInputPropsString="shouldDisplayDropdown value={dateEx4} onChange={(dateString)=>setDateEx4(dateString)}"
      />
      <Example
        title="12 hour format Time Input  :"
        timeInputProps={{ hour12Format: true, value: dateEx1, onChange: (dateString) => setDateEx1(dateString) }}
        stateString="const [dateEx1,setDateEx1]=useState('10:12')"
        timeInputPropsString="value={dateEx1} hour12Format onChange={(dateString)=>setDateEx1(dateString)}"
      />
      <Example
        title="24 hour format Time Input :"
        timeInputProps={{
          value: dateEx2,
          onChange: (dateString) => {
            setDateEx2(dateString);
          },
        }}
        stateString="const [dateEx2,setDateEx2]=useState('10:12')"
        timeInputPropsString="value={dateEx2} onChange={(dateString)=>setDateEx2(dateString)}"
      />
     
      <Example
        title="Time Input allow delete :"
        timeInputProps={{
          value: dateEx5,
          allowDelete: true,
          onChange: (dateString) => {
            setDateEx5(dateString);
          },
        }}
        stateString="const [dateEx5,setDateEx5]=useState('10:12')"
        timeInputPropsString="value={dateEx5} allowDelete onChange={(dateString)=>setDateEx5(dateString)}"
      />

      <Example
        title="Time Input allow delete :"
        timeInputProps={{
          value: dateEx6,
          disabled: true,
          onChange: (dateString) => {
            setDateEx6(dateString);
          },
        }}
        stateString="const [dateEx6,setDateEx6]=useState('10:12')"
        timeInputPropsString="value={dateEx6} allowDelete onChange={(dateString)=>setDateEx6(dateString)}"
      />
    </div>
  );
}
const Example = ({ title, timeInputProps, timeInputPropsString, stateString }) => {
  return (
    <div style={{minHeight:290}}>
      <h3>{title} </h3>
      <TimeInput {...timeInputProps} />
      <span>
        <div className="code">
          <span>{`import React, { useEffect, useState } from "react";`}</span>
          <span>{`import TimeInput from "react-time-picker-input";`}</span>
          <span>{`function TimeInputEx(){`}</span>
          <span>{`     ${stateString}`}</span>
          <span>{`     return <TimeInput ${timeInputPropsString}/>`}</span>
          <span>{`}`}</span>
        </div>
      </span>
    </div>
  );
};

export default App;
