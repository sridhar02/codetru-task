import { useState } from "react";

import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 w-full">
        <Navbar />
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
