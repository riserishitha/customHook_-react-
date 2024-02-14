import StoringData from "./store";
import "./App.css"
const App = () => {
  const [input, setinput] = StoringData(" ");
  const changes = (e) => {
    return setinput(e.target.value);
  };
  return (
    <input type="text" placeholder="Input Box ..." value={input} onChange={changes} />
  );
};
export default App;
