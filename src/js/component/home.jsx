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
  const deleteComponent = () => {
    setAdditionalComponents((prevComponents) => prevComponents.slice(0,-1));
  }
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
      <div className="botones">
        <button onClick={() => addComponent("purple")} className="boton" >Add Purple</button>
        <button onClick={() => deleteComponent()} className="boton" >Delete Purple</button>
      </div>
      
    </div>
  );
};

export default Home;