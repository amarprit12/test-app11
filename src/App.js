import "./App.css";
import ChildA from "./ChildA";
import { createContext } from "react";
// Context API : solution for prop drilling
// create, Provider, Consumer
const data = createContext();

function App() {
  const name = "Test1";
  return (
    <>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </>
  );
}

export default App;
export { data };
