import React, { useState } from "react";

const Home = () => {
  const [lightColor, setLightColor] = useState("");
  const [additionalComponents, setAdditionalComponents] = useState([]);

  const addComponent = (color) => {
    setAdditionalComponents((prevComponents) => [
      ...prevComponents,
      { color },
    ]);
  };

  return (
    <div className="contenedor">
      <div className="palito"></div>
      <div className="semaforo">
		
        <div
          onClick={() => setLightColor("red")}
          className={`light red ${lightColor === "red" ? "glow" : ""}`}
        ></div>

        <div
          onClick={() => setLightColor("yellow")}
          className={`light yellow ${lightColor === "yellow" ? "glow" : ""}`}
        ></div>

        <div
          onClick={() => setLightColor("green")}
          className={`light green ${lightColor === "green" ? "glow" : ""}`}
        ></div>

		{additionalComponents.map((component) => (
        <div
		  onClick={() => setLightColor(`${component.color}`)}
          className={`light ${component.color} ${lightColor === `${component.color}` ? "glow" : ""}`}
        ></div>
      	))}

      </div>
      
      <button onClick={() => addComponent("purple")} className="boton" >Add Purple</button>
      
    </div>
  );
};

export default Home;