import { useState } from "react";

const Checkbox = ({ items, selectedItem, setSelectedItem }) => {
  const [sex, setSex] = useState("");

  console.log(sex);
  console.log(selectedItem);

  const handleChange = (e) => {
    setSex(e.target.checked);
  };

  const handleChangePizza = (value) => {
    selectedItem.indexOf(value) > -1
      ? setSelectedItem(selectedItem.filter((x) => x !== value))
      : setSelectedItem([...selectedItem, value]);
  };
  return (
    <div className="App">
      <h3>Tekli Checkbox</h3>
      <label>
        <input type="checkbox" value="men" onChange={handleChange} />
        Remember me
      </label>
      <h3>Coklu Checkbox</h3>
      <h4>Pizzaniza ne eklemek istersiniz</h4>

      {items.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`option-${index}`}
            name={item.name}
            value={item.name}
            onChange={() => handleChangePizza(item.value)}
          />
          <label htmlFor={`option-${index}`}>{item.name}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
