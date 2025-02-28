import React from "react";
import { useState } from "react";

function TodoItem({item}) {
  return <div>
  {<li>{item}</li>}
  </div>;
};

export default TodoItem;
