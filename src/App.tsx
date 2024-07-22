import { center } from "../styled-system/patterns";
import { Card } from "./Card/Card";

function App() {
  return (
    <div className={center({ height: "100vh" })}>
      <Card />
    </div>
  );
}

export default App;
