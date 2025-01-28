import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
