import React, { useState } from "react";

const SelectClass = () => {
  const [option, setOption] = useState();
  const handleSelect = (e) => {
    setOption(e.target.value);
  };
  console.log(option);
  return (
    <div>
      <form name="selectForm">
        <div className="select-box">
          <div>
            <label for="class">Select a Class:&nbsp;&nbsp;</label>{" "}
          </div>
          <div>
            <select name="class" id="class" onChange={handleSelect}>
              <option value="1">class 1</option>
              <option value="2">class 2</option>
              <option value="3">class 3</option>
              <option value="4">class 4</option>
              <option value="5">class 5</option>
              <option value="6">class 6</option>
              <option value="7">class 7</option>
              <option value="8">class 8</option>
              <option value="9">class 9</option>
              <option value="10">class 10</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectClass;
