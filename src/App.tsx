import { Button } from "components/Button";
import "./App.css";
import HelloWorld from "components/HelloWorld";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 bg-background">
      <HelloWorld />
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
