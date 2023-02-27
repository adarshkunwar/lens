import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./components/nav/Layout";
import UserNames from "./components/UserNames";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Layout>
        <div className="flex justify-center bg-gray-800">
          <UserNames />
        </div>
      </Layout>
    </div>
  );
}

export default App;
