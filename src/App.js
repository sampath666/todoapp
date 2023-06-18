import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DashBoard />
      </div>
    </DndProvider>
  );
}

export default App;
