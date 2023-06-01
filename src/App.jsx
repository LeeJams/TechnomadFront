import { useState } from "react";
import Header from "./components/layouts/Header";
import Bottom from "./components/layouts/Bottom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="layoutWrap">
        <Header />
        <main>
          <h1>App</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </main>
        <Bottom />
      </div>
    </>
  );
}

export default App;
