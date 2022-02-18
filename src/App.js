import "./styles.css";
import { data } from "./data/data";
import Checkbox from "./Checkbox";
import { useState } from "react";

export default function App() {
  const [pizza, setPizza] = useState([]);
  return (
    <div className="App">
      <h3>Tekli Checkbox</h3>
      <Checkbox items={data} selectedItem={pizza} setSelectedItem={setPizza} />
    </div>
  );
}
