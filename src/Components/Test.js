import React, { useState } from "react";

const Test = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <br />
      {selectedOption === "option1" && (
        <p>Option 1 is selected.</p>
      )}
      {selectedOption === "option2" && (
        <p>Option 2 is selected.</p>
      )}
    </div>
  );
};

export default Test;
