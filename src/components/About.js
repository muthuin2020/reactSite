import React, { useState } from "react";

function About() {
  const [selectedFlavour, setSelectedFlavour] = useState('coconut');

  function handleChange(event) {
    setSelectedFlavour(event.target.value);
  }

  return (
    <div id="flavours" className="page-break pad1">
      <h2>About US</h2>
      <label>
        Pick your favorite ice cream flavour:
        <select value={selectedFlavour} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <p>Your flavour of choice is: <strong>{selectedFlavour}</strong></p>
    </div>
  );
}

export default About;