import { useState } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>App</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </main>
      <Footer />
    </>
  );
}

export default App;
