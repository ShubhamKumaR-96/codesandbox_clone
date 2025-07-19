import { useState } from "react";
import { PingComponent } from "./components/atoms/PingComponent";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isVisible && <PingComponent />}
    </div>
  );
};

export default App;
