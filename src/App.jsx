import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 w-full">
        <Navbar />
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
