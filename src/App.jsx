import { useState } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 리액트에서 태그에 id 걸때 어떻게 하는지 질문 */}
      <div id="layoutWrap">
        <Header />
        <main>
          <h1>App</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
