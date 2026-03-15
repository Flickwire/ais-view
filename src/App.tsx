import { AISContextProvider } from "./hooks/AISContext";
import "./App.css";
import { AISMap } from "./components/AISMap";

function App() {
  return (
    <div className="App">
      <AISContextProvider>
        <AISMap />
      </AISContextProvider>
    </div>
  );
}

export default App;
