import "./App.css";
import React, { useState } from "react";
import TimeInput from "react-time-picker-input";
import "react-time-picker-input/dist/components/TimeInput.css"
import AnimateHeight from "react-animate-height";

function App() {
  const [dateEx1, setDateEx1] = useState("11:12");
  const [dateEx2, setDateEx2] = useState("10:27");
  const [dateEx3, setDateEx3] = useState("03:15");
  const [dateEx4, setDateEx4] = useState("22:44");
  const [dateEx5, setDateEx5] = useState("07:33");
  const [dateEx6, setDateEx6] = useState("14:50");
  const [dateEx7, setDateEx7] = useState("14:50");

  return (
    <div>
      <h1>Time Input Picker</h1>
      <Example
        title="12 hour format with full time dropdown :"
        timeInputProps={{
          hour12Format: true,
          fullTimeDropdown: true,
          value: dateEx7,
          onChange: (dateString) => {
            setDateEx7(dateString);
          },
        }}
        minimized={false}
        fullMinimize={false}
        stateNumber="7"
        stateString="10:12"
        timeInputTemplate={<PropsTemplate number={7} features={["hour12Format", "fullTimeDropdown"]} />}
      />
      <Example
        title="12 hour format , manually manage dropdown of each input :"
        timeInputProps={{
          hour12Format: true,
          eachInputDropdown: true,
          manuallyDisplayDropdown: true,
          value: dateEx3,
          onChange: (dateString) => {
            setDateEx3(dateString);
          },
        }}
        fullMinimize={false}
        stateNumber="3"
        stateString="10:12"
        timeInputTemplate={
          <PropsTemplate number={3} features={["hour12Format", "eachInputDropdown", "manuallyDisplayDropdown"]} />
        }
      />
      <Example
        title="24 hour format with automatic dropdown for each input :"
        timeInputProps={{
          value: dateEx4,
          eachInputDropdown: true,
          onChange: (dateString) => {
            setDateEx4(dateString);
          },
        }}
        stateNumber="4"
        stateString="10:12"
        timeInputTemplate={<PropsTemplate number={4} features={["eachInputDropdown"]} />}
      />
      <Example
        title="12 hour format normal input :"
        timeInputProps={{ hour12Format: true, value: dateEx1, onChange: (dateString) => setDateEx1(dateString) }}
        stateNumber="1"
        stateString="10:12"
        timeInputTemplate={<PropsTemplate number={1} features={["hour12Format"]} />}
      />
      <Example
        title="24 hour format normal input:"
        timeInputProps={{
          value: dateEx2,
          onChange: (dateString) => {
            setDateEx2(dateString);
          },
        }}
        stateNumber="2"
        stateString="10:12"
        timeInputTemplate={<PropsTemplate number={2} />}
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
        stateNumber="5"
        stateString="10:12"
        timeInputTemplate={<PropsTemplate number={5} features={["allowDelete"]} />}
      />

      <Example
        title="Disabled input"
        timeInputProps={{
          value: dateEx6,
          disabled: true,
          onChange: (dateString) => {
            setDateEx6(dateString);
          },
        }}
        stateNumber="6"
        stateString="10:12"
        timeInputTemplate={<PropsTemplate number={6} features={["disabled"]} />}
      />
    </div>
  );
}

const PropsTemplate = ({ number, features }) => {
  return (
    <React.Fragment>
      <span className="orange">value</span>
      <span className="blue">{`=`}</span>
      <span className="purple">{`{`}</span>
      <span className="yellow">{`dateEx${number}`}</span>
      <span className="purple">{`}`}</span>
      {(features || []).map((feature) => {
        return <span className="orange">{feature}</span>;
      })}
      <span className="orange">{`onChange`}</span>
      <span className="blue">{`=`}</span>
      <span className="purple">{`{`}</span>
      <span className="gray">{`(`}</span>
      <span className="red">dateString</span>
      <span className="gray">{`)`}</span>
      <span className="purple">{`=>`}</span>
      <span className="blue">{`setDateEx${number}`}</span>
      <span className="gray">{`(`}</span>
      <span className="red">dateString</span>
      <span className="gray">{`)`}</span>
      <span className="purple">{`}`}</span>
    </React.Fragment>
  );
};

const Example = ({ title, timeInputProps, timeInputTemplate, stateNumber, stateString, fullMinimize, minimized }) => {
  const [minimize, setMinimize] = useState(typeof minimized !== "undefined" ? minimized : true);
  const [fullMinimized, setFullMinimized] = useState(typeof fullMinimize !== "undefined" ? fullMinimize : true);
  return (
    <div className={`overflow-hidden example`}>
      <AnimateHeight duration={300} height={fullMinimized ? 40 : "auto"}>
        <div className="padding-bottom-5">
          <h3>
            <span>{title}</span>{" "}
            <svg
              onClick={() => setFullMinimized(!fullMinimized)}
              id="svg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0, 0, 400,234.28571428571428"
            >
              <g id="svgg">
                <path
                  id="path0"
                  d="M20.238 19.684 C 11.563 22.563,7.276 31.751,10.863 39.780 C 12.584 43.631,191.111 221.884,194.524 223.158 C 197.636 224.321,202.364 224.321,205.476 223.158 C 208.889 221.884,387.416 43.631,389.137 39.780 C 393.400 30.237,386.396 19.359,375.952 19.304 C 369.102 19.267,377.188 11.743,283.927 104.935 L 199.997 188.803 116.308 105.133 C 47.624 36.465,32.216 21.286,30.370 20.477 C 27.506 19.221,22.754 18.849,20.238 19.684 "
                  stroke="none"
                  fill="#000000"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>{" "}
          </h3>
          <div className="inputcontainer">
            <TimeInput {...timeInputProps} />
          </div>
          <span>
            <AnimateHeight duration={300} height={minimize ? 40 : "auto"}>
              {minimize ? (
                <div className={`code`}>
                  <span className="codeicon" onClick={() => setMinimize(!minimize)}>{`<>`}</span>
                  <span className="gray">{` //Code Example`}</span>
                </div>
              ) : (
                <div className={`code`}>
                  <span className="codeicon" onClick={() => setMinimize(!minimize)}>{`<>`}</span>
                  <span className="gray">{` //Code Example`}</span>
                  <span>
                    <span className="purple">{`import `}</span>
                    <span className="red">React</span>
                    <span className="gray">{`, { `}</span>
                    <span className="red">useState</span>
                    <span className="gray">{` } `}</span>
                    <span className="purple">{`from `}</span>
                    <span className="green">{`"react"`}</span>
                    <span className="gray">{`;`}</span>
                  </span>
                  <span>
                    <span className="purple">{`import `}</span>
                    <span className="red">TimeInput</span>
                    <span className="purple">{`from `}</span>
                    <span className="green">{`"react-time-picker-input"`}</span>
                    <span className="gray">{`;`}</span>
                  </span>
                  <span>
                    <span className="purple">{`function`}</span>
                    <span className="blue">{`TimeInputEx`}</span>
                    <span className="gray">{`(){`}</span>
                  </span>
                  <span className="margin-left-15">
                    <span className="purple">{`const`}</span>
                    <span className="gray">{`[`}</span>
                    <span className="yellow">{`dateEx${stateNumber}`}</span>
                    <span className="gray">{`,`}</span>
                    <span className="blue">{`setDateEx${stateNumber}`}</span>
                    <span className="gray">{`]`}</span>
                    <span className="blue">{`= useState`}</span>
                    <span className="gray">{`(`}</span>
                    <span className="green">{`"${stateString}"`}</span>
                    <span className="gray">{`)`}</span>
                  </span>
                  <span className="margin-left-15">
                    <span className="purple">return</span>
                    <span className="gray">{`<`}</span>
                    <span className="yellow">TimeInput</span>
                    {timeInputTemplate}
                    <span className="gray">{`/>;`}</span>
                  </span>
                  <span>
                    <span className="gray">{`}`}</span>
                  </span>
                </div>
              )}
            </AnimateHeight>
          </span>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default App;