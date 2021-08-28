import React, { useState } from "react";
import TimeInput from "react-time-picker-input";
function TimeInputEx() {
  const [dateEx7, setDateEx7] = useState("10:12");
  return <TimeInput value={dateEx7} hour12Format eachInputDropdown onChange={(dateString) => setDateEx7(dateString)} />;
}
