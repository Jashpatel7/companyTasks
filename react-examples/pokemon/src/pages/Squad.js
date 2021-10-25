import React, { useState } from "react";
import Card from "../components/Card";

function Squad({ data, onClose }) {
  const [empty, setEmpty] = useState(false);
  return (
    <div className="squad-container">
      <h3 className="fc-blue center mb-20">Selected Squad</h3>
      <ul className="cards-container">
        {data.map((unique, index) =>
          true ? (
            <li key={index}>
              <Card
                // show={empty}
                onClose={onClose}
                imgPath={unique.sprites.front_default}
                name={unique.species.name.toUpperCase()}
                ability={unique.abilities[0].ability.name}
              />
            </li>
          ) : (
            <h2>Hello</h2>
          )
        )}
      </ul>
    </div>
  );
}

export default Squad;
