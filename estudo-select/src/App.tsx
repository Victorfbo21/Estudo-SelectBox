import React from "react";
import useEstados from "./hooks/estados";
function App() {
  const { estados } = useEstados();
  console.log(estados);
  
  return (
    <div className="App"> 
          <select>
              {estados.map(estado => <option>{estado.nome}</option>)}
          </select>
          
          <select>

          </select>
    </div>    
  );
}

export default App;
