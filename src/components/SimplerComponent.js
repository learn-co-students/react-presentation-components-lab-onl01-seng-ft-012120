import React from "react";
import { render } from "enzyme";

const SimplerComponent = (props) => (
  <div onClick={props.handleClick}>I am just happy.</div>
);

export default SimplerComponent;
