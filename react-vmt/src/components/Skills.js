import React from "react";
import reactLogo from "../images/logo192.png";
import nodeLogo from "../images/nodejs.png";
import pythonLogo from "../images/python.jpg";
function Skills() {
  return (
    <div>
      <ul class="skills">
        <li>
          <img alt="React Logo" src={reactLogo} />
        </li>
        <li>
          <img alt="Svelte Logo" src={nodeLogo} />
        </li>
        <li>
          <img alt="Svelte Logo" src={pythonLogo} />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
