import React from "react";
import Input from "../../components/Input";
import "./Colors.css";
const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="com">
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test1" id="" />
          <span className="checkmark all" ></span>ALL
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="white" name="test1" id="" />
          <span
            className="checkmark"
            style={{ background: "white",  }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
