import React, { useState, useEffect, useRef } from "react";
import { BuscarAPI } from "./BuscarAPI";
import { RenderUsers } from "./RenderUsers";

export function Busqueda() {
  // sacamos variables del react para saber el estado
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [userResults, setUserResults] = useState([]); // Nuevo estado para los resultados de la búsqueda

  // Usamos useEffect para obtener los datos de la API y actualizar los componentes
  useEffect(() => {
    handleChange();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      setUserResults([]); // Limpia los resultados de la búsqueda cuando el inputValue cambia
      setLoading(true);
    };
  }, [inputValue]);

  // Creamos la función que mandará al componente de la api de github
  async function handleChange() {
    const userInput = await inputValue.trim();
    if (userInput) {
      const results = await BuscarAPI(userInput);
      setUserResults(results); // Guarda los resultados de la búsqueda en el estado
    } else {
      setUserResults([]);
    }
  }

  // Se encarga de hacer render del la barra del buscador
  return (
    <div className="centerItems">
      <p className="textTitle">
        Buscador de usuarios de GitHub, puedes buscar a un usuario dentro de github
        solo con escribir su nombre de usuario:
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese el usuario a buscar"
        id="search"
      />
      {loading ? (
        <div className="loading" id="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        inputValue && (
          <div id="users">
            <RenderUsers resultados={userResults} />
          </div>
        )
      )}
     
    </div>
  );
}
